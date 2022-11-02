import React from "react";
import Card from '../card';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href=""></a>
                </div>
                <ul>
                    <li>
                        <a className="nav_link" href="">Inicio</a>
                    </li>
                    <li>
                        <a className="nav_link" href="">Productos</a>
                    </li>
                    <li>
                        <a className="nav_link" href=""><Card /></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;