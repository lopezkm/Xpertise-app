import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Dashboard from '../src/components/dashboard/dashboard.jsx';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import ProyectDetail from './components/proyectDetail/proyectDetail.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Route path='/' render={() => <Navbar/>}/>
      <Route exact path='/' render={() => <Home/>}/>
      <Route exact path='/dashboard' render={() => <Dashboard/>}/>
      <Route exact path='/login' render={() => <Login/>}/>
      <Route exact path='/register' render={() => <Register/>}/>
      <Route exact path='/detail' render={() => <ProyectDetail/>}/>
    </div>
  );
}

export default App;
