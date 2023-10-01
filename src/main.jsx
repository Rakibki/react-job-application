import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/rounter";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import UserAuth from "./components/UserAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserAuth>
        <RouterProvider router={router} />
      </UserAuth>
    </HelmetProvider>
  </React.StrictMode>
);
