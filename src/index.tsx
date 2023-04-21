import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import { RouteComponent } from "./routes/route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>
);
