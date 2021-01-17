import React from 'react';

const Login = () => {

    return (
        <div className="d-flex justify-content-center mt-4">
            <form className="formContainer">
                <h1 className="formTitle">Login</h1>
                <div className="mb-3">
                    <label className="formLabel">Email</label>
                    <div className="col-sm-10">
                    <input type="email" class="formInput" id="inputEmail"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="formLabel">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="formInput" id="inputPassword"/>
                    </div>
                </div>
                <a className="formNewPassword" href="/login">Recuperar contraseña</a>
                <button type="submit" className="formButton">Continuar</button>
                <a className="formCreateAccount" href="/login">Crear cuenta</a>
            </form>
        </div>
    )
}

export default Login;