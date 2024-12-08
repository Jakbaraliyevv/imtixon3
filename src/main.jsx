import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import Root from "./root";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Root} />
  </StrictMode>
);
