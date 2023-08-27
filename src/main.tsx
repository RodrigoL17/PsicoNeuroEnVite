import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ViewportProvider } from "./contexts/viewport-context";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ViewportProvider>
        <RouterProvider router={router} />
      </ViewportProvider>
    </ThemeProvider>
  </React.StrictMode>
);
