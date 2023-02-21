import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import authReducer from "./state";

import App from "./App";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
