import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./component/App";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <App />
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
