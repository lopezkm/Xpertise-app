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
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="navbarButton btn btn-outline-info">
                    <a className="navbarLogin" href="/login">Login</a>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;