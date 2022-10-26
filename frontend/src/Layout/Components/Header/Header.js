import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import AuthTopbar from "./Topbar/AuthTopbar";
import Topbar from "./Topbar/Topbar";

const Header = () => {
  const { isAuth, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) return null;
  if (isAuth)
    return (
      <>
        <AuthTopbar />
        <Navbar />
      </>
    );
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};

export default Header;
