import React from 'react';

const NavBar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">Xpertise</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                </ul>
                <button className="navbarButton btn btn-outline-info">
                    <a className="navbarLogin" href="/login">Login</a>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;