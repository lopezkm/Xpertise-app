import React from 'react';

const PanelAdmin = () => {
    
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div className="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                            <h5 className="card-title">PROYECTOS</h5>
                            <p className="card-text">Accede a los proyectos en curso </p>
                            <a href="#" className="btn btn-danger">Ir a Proyectos</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                            <h5 className="card-title">USUARIOS</h5>
                            <p className="card-text">Ver usuarios activos</p>
                            <a href="#" className="btn btn-success">Ir a Usuarios</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                            <h5 className="card-title">CLIENTES</h5>
                            <p className="card-text">ver clientes actuales</p>
                            <a href="#" className="btn btn-primary">Ir a clientes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelAdmin;