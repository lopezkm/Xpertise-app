import React, { useState } from 'react';
import LineProgress from './atomics/tableLineProyectInProgress.jsx';
import LineFinished from './atomics/tableLineProyectFinished.jsx';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

    const [status, setStatus] = useState(true);
    const Proceso = useSelector(state => state.onGoing);
    console.log(Proceso)
    const Terminado = useSelector(state => state.finished);
    const dispatch = useDispatch();
    
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
                    <button onClick={() => setStatus(true)} className="secondColumn_statusProyects_onGoing">En curso</button>
                    <button onClick={() => setStatus(false)} className="secondColumn_statusProyects_finished">Terminados</button>
                </div>
                { status ? 
                <table className="table">
                    <thead>
                        <tr>
                        <th className="table_proyect_title">Proyecto</th>
                        <th className="table_type_title">Tipo</th>
                        <th className="table_deadline_title">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                   {/*  { onGoing.map(proyect => 
                        <LineProgress
                            id= {proyect.id}
                            title= {proyect.title}
                            type= {proyect.type}
                            deadLine= {proyect.deadLine}
                        />)
                    }     */}
                    </tbody>
                </table> :
                <table className="table">
                    <thead>
                        <tr>
                        <th className="table_proyect_title">Proyecto</th>
                        <th className="table_type_title">Tipo</th>
                        <th className="table_deadline_title">Finalizado</th>
                        </tr>
                    </thead>
                    <tbody>
                   {/*  { finished.map(proyect => 
                        <LineProgress
                            id= {proyect.id}
                            title= {proyect.title}
                            type= {proyect.type}
                            done= {proyect.done}
                        />)
                    }     */}
                    </tbody>
                </table> }
            </div>
        </div>
    )
}

export default Dashboard; 