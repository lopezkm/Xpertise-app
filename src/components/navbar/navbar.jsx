import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { idLogued } from '../../redux/actions/actions.js';

const NavBar = () => {

    const idLogin = useSelector(state => state.id);
    const users = useSelector(state => state.registered);
    const dispatch = useDispatch();

    let userLogued = users.filter(user => user.id === idLogin)[0];
    let logout = "";

    function logOut() {
        dispatch(idLogued(logout));
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Xpertise</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                </ul>
                {idLogin ? 
                    <p className="navbarUser">{userLogued.firstName}</p> 
                : null}
                {idLogin ? <a className="navbarLogin" onClick={logOut} href="/">Logout</a>
                 : <a className="navbarLogin" href="/login">Login</a>}
            </div>
        </nav>
    )
}

export default NavBar;