import React, { useState } from 'react';
import LineProgress from './atomics/tableLineProyectInProgress.jsx';
import LineFinished from './atomics/tableLineProyectFinished.jsx';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { newProyect } from '../../redux/actions/actions.js';

export default function Dashboard() {

    const [status, setStatus] = useState(true);
    const [show, setShow] = useState(false);
    const [startingProyect, setStartingProyect] = useState(null);
    const onGoing = useSelector(state => state.onGoing);
    const finished = useSelector(state => state.finished);
    const dispatch = useDispatch();

    function handleChange(e) {
        let name= e.target.name;
        setStartingProyect({
            ...startingProyect,
            [name]:e.target.value,
        });
    }
    
    function handleEdit() {
        dispatch(newProyect(startingProyect));
        setShow(false);
    }


    return(
        <div className="dashboardContainer">
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modal-proyect-header">
                    <Modal.Title>Nuevo Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="modal-form-control"
                            onChange={handleChange}
                            name="title" 
                            type="text" 
                            placeholder= "ej: Galpón cervecería"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control className="modal-form-control"
                            onChange={handleChange}
                            name="type" 
                            type="text" 
                            placeholder="ej: fábrica"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control className="modal-form-control"
                            onChange={handleChange}
                            name="deadLine" 
                            type="text" 
                            placeholder="ej: Octubre - 2021"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="modal-proyect-footer">
                    <Button className="modal-button-close" onClick={() => setShow(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleEdit} className="modal-button-save-proyect">Guardar</Button>
                </Modal.Footer>
            </Modal>
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
                    <button onClick={() => setShow(true)} className="secondColumn_header_button">Nuevo Proyecto</button>
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
                    { onGoing.map(proyect => 
                        <LineProgress
                            id= {proyect.id}
                            title= {proyect.title}
                            type= {proyect.type}
                            deadLine= {proyect.deadLine}
                        />)
                    }     
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
                    { finished.map(proyect => 
                        <LineFinished
                            id= {proyect.id}
                            title= {proyect.title}
                            type= {proyect.type}
                            done= {proyect.done}
                        />)
                    }     
                    </tbody>
                </table> }
            </div>
        </div>
    )
}
