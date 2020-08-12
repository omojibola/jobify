import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => (
  <div className='navbar-container'>
    <div className='logo-container'>
      <Link to='/'>Jobify.</Link>
    </div>
    <div className='nav-link'>
      <Link className='link' to='/'>
        Jobs
      </Link>

      <Link className='link' to='/companies'>
        Companies
      </Link>
      <Link className='link' to='/employers'>
        Employers
      </Link>
      <Link className='link' to='/post-a-job'>
        <button className='button'>Post A Job</button>
      </Link>
    </div>
  </div>
);

export default Header;
