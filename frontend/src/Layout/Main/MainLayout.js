import React from 'react';
import './MainLayout.css'
import {Outlet} from 'react-router-dom'

import Header from '../Components/Header/Header';

const MainLayout = () => {
 
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout