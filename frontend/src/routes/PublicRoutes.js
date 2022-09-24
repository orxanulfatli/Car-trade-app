import React from "react";
import { useAuth } from "../services/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = () => {
  const auth = useAuth();
  const location = useLocation();
  return (
    <>
      {auth ? (
        <Navigate to={"/profile"} state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoutes;
