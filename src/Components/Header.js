import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


function Header() {
    return(
        <div className="menu-bar">
            <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/product'><li>Product</li></Link>
            <Link to='/data'><li>Data</li></Link>
            <Link to='/sample'><li>Sample</li></Link>
            <Link to='/findthing'><li>Findthing</li></Link>


            </ul>
        </div>
        
    )
}
export default Header;