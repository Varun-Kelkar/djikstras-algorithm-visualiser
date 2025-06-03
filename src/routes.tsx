import { createBrowserRouter } from "react-router";
import App from "./App";
import LandingPage from "./pages/LandingPage/LandingPage";
import Explore from "./pages/Explore/Explore";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, Component: LandingPage },
        {
          path: "explore",
          Component: Explore,
        },
      ],
    },
  ],
  {
    basename: "/djikstras-algorithm-visualizer",
  }
);
