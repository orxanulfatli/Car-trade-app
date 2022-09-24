import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar/Navbar'
import AuthTopbar from './Topbar/AuthTopbar'
import Topbar from './Topbar/Topbar'

const Header = () => {
  const { isAuth, isCheckLoading } = useSelector((state) => state.auth);
  

  return (
    <div>
      {isAuth && <AuthTopbar />}
      {!isAuth && <Topbar />}
      <Navbar />
    </div>
  );
}

export default Header