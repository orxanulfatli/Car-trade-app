import React, { useEffect, useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.constants";
import { loadState } from "./utils/localStorage";
import { checkAuthAC } from "./Global/actions/authActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = loadState("token");
    if (token) {
      dispatch(checkAuthAC())
    }
  }, []);

  const Routes = useRoutes([...routes]);
  return <div className="App">{Routes}
  </div>;
}

export default App;
