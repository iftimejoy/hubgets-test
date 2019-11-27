import React from 'react';
import  { Link } from 'react-router-dom';

import logo from '../assets/logo-hubgets.png';

const Header = () => (
    <header>
        <div className="content-container">
            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt="hubgets" placeholder="hubgets"/>
                </Link>  
            </div>
        </div>            
    </header>
);

export default Header;