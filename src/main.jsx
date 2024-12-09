import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import Root from "./root";
import { ShopContext } from "./contex";
createRoot(document.getElementById("root")).render(
  <ShopContext>
    <RouterProvider router={Root} />
  </ShopContext>
);
