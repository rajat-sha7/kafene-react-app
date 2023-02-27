import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';



const HeaderLogin = () => {
  return (
    <div className="header">
        <div className="header-left">
            <div className="header-left-logo">
                <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                <p className="brand-name">Kafene</p>
            </div>
            <nav>
                <Link className="link-tab" to=''>Orders</Link>
                <Link className="link-tab" to=''>Products</Link>
                <Link className="link-tab" to=''>Users</Link>
            </nav>
        </div>
    </div>
    
  )
}

export default HeaderLogin