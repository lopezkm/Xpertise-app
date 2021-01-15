import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/home/home.jsx';
import Navbar from './Components/navbar/navbar.jsx';
import Dashboard from './Components/dashboard/dashboard.jsx';
import Login from './Components/login/login.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Route path='/' render={() => <Navbar/>}/>
      <Route exact path='/home' render={() => <Home/>}/>
      <Route exact path='/dashboard' render={() => <Dashboard/>}/>
      <Route exact path='/login' render={() => <Login/>}/>
    </div>
  );
}

export default App;
