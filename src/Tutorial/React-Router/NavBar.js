import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li> 
                    <Link to="/" className='item'>HOME</Link>
                </li>
                <li> 
                    <Link to="/about" className='item'>ABOUT</Link>
                </li>
                <li> 
                    <Link to="/people" className='item'>PEOPLE</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
