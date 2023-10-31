import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login/login.jsx";
import Home from "./Pages/Home/home.jsx";
import errorPage from "./Pages/Home/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <Login /> 
    </App>,
    errorElement: <errorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);


/* import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Home from "./Pages/Home/home.jsx";
import errorPage from "./Pages/Home/error-page.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <Login /> 
    </App>,
    errorElement: <errorPage />,
    children: [
      {
        path: "/Pages/Login/login",
        element: <App> 
          <Login /> 
        </App>,
        children: [
          {
            path: "/Pages/Home/home",
            element: <App> 
              <Home />
            </App>,
          }
        ]
      }
    ]
  }
]);

/* const router = createBrowserRouter([
  {
    path: "/",
    element: App,
    errorElement: <errorPage />,
    children: [
      {
        path: "/Pages/Login/login",
        element: <Login />,
        children: [
          {
            path: "/Pages/Login/home",
            element: <Home />,
          }
        ]
      }
    ]
  }
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
