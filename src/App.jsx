
import * as React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";


const App = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);


export default App;