import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../../../assets/image/13.07.2022_01.27.15_REC.png";
const AuthTopbar = () => {
  return (
    <div className="topbar">
      <div>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className="call-center">
        Dəstək xidməti: (012) 599-08-01; (012) 505-77-55
      </div>

      <nav className="topbar-nav">
        <ul className="topbar-nav__menu">
          <li>
            <a>
              <i className="bi bi-star"></i>
            </a>
          </li>

          <li>
            <div className="dropdown-menu">
              <i className="bi bi-person"></i>

             
                <Link to="/profile" state='hello'>Profile</Link>
             
           
            </div>
          </li>

          <li>
            <select className="langs-menu">
              <option value="az">az</option>
              <option value="rus">rus</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AuthTopbar