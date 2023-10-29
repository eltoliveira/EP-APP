import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);