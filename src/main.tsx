import React from "react";
import { createRoot } from "react-dom/client";
import App from "./view/App/App.view";
import ResetCSS from "./styles/reset.styles";
import { Provider } from "react-redux";
import store from "./state/configure.store";

const container = document.querySelector("#root") as HTMLDivElement;
createRoot(container).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ResetCSS />
  </>
);
