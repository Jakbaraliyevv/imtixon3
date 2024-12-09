import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import Root from "./root";
import { ShopContext } from "./contex";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContext>
      <RouterProvider router={Root} />
    </ShopContext>
  </StrictMode>
);
