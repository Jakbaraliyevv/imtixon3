import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Korzina from "../pages/shop";
import UserItem from "../components/userItem";
import Like from "../components/like";

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
    path: "/like",
    element: <Like />,
  },

  {
    path: "/products/:id",
    element: <UserItem />,
  },
]);

export default Root;
