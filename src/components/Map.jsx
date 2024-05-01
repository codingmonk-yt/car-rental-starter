import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY29kaW5nbW9uayIsImEiOiJjbHFra3JiNzYwaGh5MnJwOThpN3ZyaXhwIn0.4y7jYQgHTtZgTP3NoKndaQ";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10", // Use dark theme style
      center: [78.2071369, 26.2560967],
      zoom: 14,
    });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl());

    // Add marker for origin
    const origin = [78.2071369, 26.2560967];
    new mapboxgl.Marker({ color: "#4287f5" }) // Use blue color for "You"
      .setLngLat(origin)
      .setPopup(new mapboxgl.Popup().setHTML(`<div><h3>You</h3></div>`))
      .addTo(map);

    // Add marker for destination
    const destination = [78.1887617, 26.2100195];
    new mapboxgl.Marker({ color: "#ff5722" }) // Use orange color for destination
      .setLngLat(destination)
      .setPopup(new mapboxgl.Popup().setHTML(`<div><h3>Destination</h3></div>`))
      .addTo(map);

    // Fetch route
    fetchRoute(origin, destination)
      .then((route) => {
        // Draw route on the map
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: route.geometry.coordinates,
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#888",
            "line-width": 8,
          },
        });

        // Show estimated time
        console.log("Estimated time:", route.duration / 60, "minutes");
      })
      .catch((error) => console.error("Error fetching route:", error));

    return () => map.remove();
  }, []);

  const fetchRoute = async (origin, destination) => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&steps=true&access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();
    console.log(data);
    if (data.routes && data.routes.length > 0) {
      return {
        geometry: data.routes[0].geometry,
        duration: data.routes[0].duration,
      };
    } else {
      throw new Error("No route found");
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* <div id="instructions"></div> */}
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Map;
