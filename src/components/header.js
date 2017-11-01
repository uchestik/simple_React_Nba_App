import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <div className='flexbox-container'>
                <Link to='/' className='logo'>
                    <span></span>
                </Link>
            </div>
            <nav>
                <Link to='/teams'>Teams</Link>
            </nav>
        </header>
    )
}

export default Header;