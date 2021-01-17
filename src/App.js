import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Dashboard from '../src/components/dashboard/dashboard.jsx';
import Login from './components/login/login.jsx';
import './App.css';

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
