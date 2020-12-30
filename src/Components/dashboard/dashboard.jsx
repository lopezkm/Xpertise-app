import React from 'react';

const Dashboard = () => {
    
    return(
        <div className="dashboardContainer">
            <div className="firstColumn"> 
                <div className="firstColumn_header">
                    <div className="firstColumn_header_picture"/>
                    <div className="firstColumn_header_title">
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className="firstColumn_footer">
                <div className="firstColumn_footer_picture"/>
                    <div className="firstColumn_footer_title">
                        <p>Matias Molina</p>
                    </div>
                </div>
            </div>
            <div className="secondColumn">
                <div className="secondColumn_header">
                    <div className="secondColumn_header_title">Proyectos</div>
                    <button className="secondColumn_header_button">Nuevo Proyecto</button>
                </div>
                <input type="text" value="Buscar" className="secondColumn_searchInput"/>
                <div className="secondColumn_statusProyects_container">
                    <button className="secondColumn_statusProyects_onGoing">En curso</button>
                    <button className="secondColumn_statusProyects_finished">Terminados</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th className="table_proyect_title">Proyecto</th>
                        <th className="table_type_title">Tipo</th>
                        <th className="table_deadline_title">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Nombre de proyecto</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Nombre de proyecto</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Nombre de proyecto</td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard; 