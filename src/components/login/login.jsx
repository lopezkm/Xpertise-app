import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idLogued } from '../../redux/actions/actions.js';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';


toast.configure();

const Login = () => {

    const [logued, setLogued] = useState({
        email: "",
        password: ""
    })
    const [idLoguedUser, setIdLoguedUser] = useState("");
    const [flag, setFlag] = useState(false);
    const allRegister = useSelector(state => state.registered);
    const dispatch = useDispatch();
    console.log(allRegister);
    console.log(logued.email);

    function handleChange(e) {
        let name= e.target.name;
        setLogued({
            ...logued,
            [name]:e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        var existUser = allRegister.filter(user => user.email === logued.email);
        if(existUser.length === 0) {
            toast.error( "Email invalido - Crea tu cuanta para poder loguearte", {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        } else if(existUser[0].password !== logued.password) {
            toast.error( "Contraseña incorrecta", {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        } else {
            setIdLoguedUser(existUser[0].id);
            toast.success( `Bienvenid@ ${existUser[0].firstName}`, {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        }
    }

    useEffect(() => {
        if(idLoguedUser) {
            dispatch(idLogued(idLoguedUser));
            setTimeout(() => {
                setFlag(true);
            }, 2100); 
        }
    },[idLoguedUser]);

    return (
        <div className="d-flex justify-content-center mt-4">
            {flag ? <Redirect to="/"/> : null}
            <form className="formContainer" onSubmit={handleSubmit}>
                <h1 className="formTitle">Login</h1>
                <div className="mb-3">
                    <label className="formLabel">Email</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} type="email" class="formInput" name="email" id="inputEmail"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="formLabel">Password</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} type="password" className="formInput" name="password" id="inputPassword"/>
                    </div>
                </div>
                <a className="formNewPassword" href="/login">Recuperar contraseña</a>
                <button type="submit" className="formButton">Continuar</button>
                <a className="formCreateAccount" href="/register">Crear cuenta</a>
            </form>
        </div>
    )
}

export default Login;