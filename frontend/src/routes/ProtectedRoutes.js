import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();
  if (isLoading) return null;

  if (isAuth) return <Outlet />;

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoutes;
