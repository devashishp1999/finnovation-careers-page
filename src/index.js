import React from "react";

import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import MyProvider from "./contextApi/MyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
