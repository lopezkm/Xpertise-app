import React from 'react';

const Home = () => {
    
    return(
        <div class="jumbotron">
            <h1 class="display-4">Bienvenido a Xpertise APP</h1>
            <p class="lead">Esta es una pantalla de bienvenida, temporal a modo de prueba para renderizados y redirecciones</p>
            <hr class="my-4"/>
            <p>Puedes acceder al panel de administrador dando click en el boto más abajo o desde la barra de navegación en la opcion correspondinete</p>
            <p class="lead"> 
                <a class="btn btn-info btn-lg" href="/panelAdmin" role="button"> Panel Admin</a>
            </p>
        </div>
    )
}

export default Home;