import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Korzina from "../pages/shop";
import UserItem from "../components/userItem";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Korzina />,
  },

  {
    path: "/cards/:id",
    element: <UserItem />,
  },
]);

export default Root;
