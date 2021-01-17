import React from 'react';

const Home = () => {
    
    return(
        <div className="jumbotron">
            <h1 className="display-4">Bienvenido a Xpertise APP</h1>
            <p className="lead">Esta es una pantalla de bienvenida, temporal a modo de prueba para renderizados y redirecciones</p>
            <hr className="my-4"/>
            <p>Puedes acceder al panel de administrador dando click en el boto más abajo o desde la barra de navegación en la opcion correspondinete</p>
            <p className="lead"> 
                <a className="btn btn-info btn-lg" href="/dashboard" role="button">Dashboard</a>
            </p>
        </div>
    )
}

export default Home;