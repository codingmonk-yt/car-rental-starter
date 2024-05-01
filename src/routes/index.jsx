/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";
import { useRoutes, useLocation } from "react-router-dom";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <HomePage />, index: true },
      ],
    },
    
  ]);
}

// IMPORT COMPONENTS
const HomePage = Loadable(lazy(() => import("../pages")));
