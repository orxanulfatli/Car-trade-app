import React, { useEffect, useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.constants";
import { loadState } from "./utils/localStorage";
import { checkAuthAC } from "./Global/actions/authActions";
import { useDispatch,useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";


function App() {
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state=>state.auth)
  useEffect(() => {
    const token = loadState("token");
    if (token) {
      dispatch(checkAuthAC())
    }
  }, []);

  const Routes = useRoutes([...routes]);
  return (
    <div className="App">
      {isLoading&&<div></div>}
      {Routes}

      <ToastContainer
        position="bottom-right"
        autoClose={false}
        closeOnClick={false}
        draggable={true}
        theme="colored"
      />
    </div>
  );
}

export default App;
