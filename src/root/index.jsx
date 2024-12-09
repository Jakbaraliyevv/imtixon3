import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Korzina from "../pages/shop";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Korzina />,
  },
]);

export default Root;
