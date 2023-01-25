import React from "react";
import {createRoot} from "react-dom/client";
import App from "./view/App";
import ResetCSS from "./styles/reset.styles";

const container = document.querySelector("#root") as HTMLDivElement;
createRoot(container).render(
  <>
    <App />
    <ResetCSS />
  </>
);