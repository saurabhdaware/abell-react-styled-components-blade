import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/700-italic.css";

if (document.querySelector("#root")) {
  ReactDOM.hydrateRoot(document.querySelector("#root"), <App />);
}
