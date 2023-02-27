import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <div className="header">
        <div className="header-left">
            <div className="header-left-logo">
                <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                <p className="brand-name">Kafene</p>
            </div>
            <nav>
                <Link className="link-tab" to='/order'>Orders</Link>
                <Link className="link-tab" to='/products'>Products</Link>
                <Link className="link-tab" to='/user'>Users</Link>
            </nav>
        </div>
        <Link class="link-tab" id="logout-btn" to="/">Logout</Link>

    </div>
  )
}

export default Header
