import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* need to loade home at /Pages/home*/}
    <Home />
  </BrowserRouter>
);