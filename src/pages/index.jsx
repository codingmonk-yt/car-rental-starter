import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { YoutubeLogo } from "phosphor-react";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <Container>
      <Box sx={{ width: 1, height: "100vh", position: "relative" }}>
        <Stack
          alignItems="center"
          spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Logo sx={{width: 200}} />
          <Typography variant="h4">Car rental app</Typography>
          <Typography variant="subtitle1">
            This is the starter code for react web app for car rental
            application
          </Typography>
          <Button
            LinkComponent={Link}
            href="https://www.youtube.com/channel/UCEFnn6wSrXKyJo4EnnCYbnw"
            variant="contained"
            startIcon={<YoutubeLogo />}
            target="_blank"
          >
            Support us by subscribing
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
