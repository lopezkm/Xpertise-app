import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/home/home.jsx';
import NavBar from './Components/nav_bar/nav_bar.jsx';
import PanelAdmin from './Components/panel_admin/panel_admin.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Route path='/' render={ ( ) => <NavBar/> }/>
      <Route exact path='/home' render={ () => <Home/>}/>
      <Route exact path='/panelAdmin' render={ () => <PanelAdmin/>}/>
    </div>
  );
}

export default App;
