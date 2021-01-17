import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { newRegistered } from '../../redux/actions/actions.js';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

toast.configure();

export default function Register() {
    
    const [register, setRegister] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        date: ""
    })
    const [flag, setFlag] = useState(false);
    const allRegister = useSelector(state => state.registered);
    const dispatch = useDispatch();

    function handleChange(e) {
        let name= e.target.name;
        setRegister({
            ...register,
            [name]:e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let existUser = allRegister.filter(user => user.email === register.email);
        if(existUser.length !== 0) {
            toast.error( "Ya existe un usuario registrado con este email", {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        } else {
            let newId = parseInt(allRegister[(allRegister.length - 1)].id) + 1;
            let actualDate = new Date().toString().split(" ", 3)[2];
            setRegister({
                ...register,
                date: actualDate,
                id: newId
            })
            toast.success( `Hola ${register.firstName} te has registrado con éxito`, {
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
        if(register.id) {
            dispatch(newRegistered(register));
            setTimeout(() => {
                setFlag(true);
            }, 2100); 
        }
    },[register.id]);

    return (
        <div className="d-flex justify-content-center mt-4">
            <Form className="formRegister" onSubmit={handleSubmit}>
                {flag ? <Redirect to="/login"/> : null}
                <h2 className="formTitleRegister">Registrate</h2>
                <Form.Group className="formGroupRegister" controlId="formBasicEmail">
                    <Form.Label className="formRegisterLabel">Nombre</Form.Label>
                    <Form.Control className="formRegisterControl"
                        onChange={handleChange}
                        name="firstName" 
                        type="text" 
                        placeholder="ingresa tu nombre"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="formGroupRegister" controlId="formBasicEmail">
                    <Form.Label className="formRegisterLabel">Apellido</Form.Label>
                    <Form.Control className="formRegisterControl"
                        onChange={handleChange}
                        name="lastName" 
                        type="text" 
                        placeholder="ingresa tu apellido"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="formGroupRegister" controlId="formBasicEmail">
                    <Form.Label className="formRegisterLabel">Email</Form.Label>
                    <Form.Control className="formRegisterControl"
                        onChange={handleChange}
                        name="email" 
                        type="email" 
                        placeholder="ingresa tu email"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="formGroupRegister" controlId="formBasicPassword">
                    <Form.Label className="formRegisterLabel">Contraseña</Form.Label>
                    <Form.Control className="formRegisterControl"
                        onChange={handleChange}
                        name="password" 
                        type="password" 
                        placeholder="ingresa tu contraseña" />
                </Form.Group>
                <Button className="formRegisterButton" type="submit">
                    Registrarme
                </Button>
            </Form>
        </div>
    )
}