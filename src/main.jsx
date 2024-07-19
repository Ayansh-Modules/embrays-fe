import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BlogContextProvider  from "./Context/BlogContext"
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
  </BrowserRouter>
);
