import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Korzina from "../pages/shop";
import UserItem from "../components/userItem";
import UserPRoduct from "../components/userProduct";

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
    path: "/products/:id",
    element: <UserItem />,
  },
  {
    path: "/seleres/:id",
    element: <UserPRoduct />,
  },
]);

export default Root;
