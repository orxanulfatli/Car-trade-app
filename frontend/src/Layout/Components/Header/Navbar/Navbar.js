import React from 'react';
import './Navbar.css';
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="menu">
        <ul className="menu_list">
          <li className="menu_list_item">Bütün elanlar</li>
          <li className="menu_list_item">Salonlar</li>
          <li className="menu_list_item">Ehtiyyat hissələri və aksesuarkar</li>
        </ul>
      </div>

      <div className="sell">
        <Link to="/sell">
          <i class="bi bi-plus-square-fill"></i>
          Elan yerləşdir
        </Link>
      </div>
    </div>
  );
}

export default Navbar