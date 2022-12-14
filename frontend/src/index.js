import React, { StrictMode } from "react";
import "./index.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Global/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";





    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
);
