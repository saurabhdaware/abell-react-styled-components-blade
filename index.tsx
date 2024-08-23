import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@razorpay/blade/fonts.css";

if (document.querySelector("#root")) {
  ReactDOM.hydrateRoot(document.querySelector("#root"), <App />);
}
