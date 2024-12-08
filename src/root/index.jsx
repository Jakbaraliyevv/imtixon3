import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Root;
