import React from 'react';
import './App.css';
import Header from './components/header';
import SidebarNav from './components/sidenavbar';
import Routes from './controllers/routes';
// import Modal from './components/modal';
// import { Link } from 'react-router-dom';

const App = ()=>(
  <div className="container-fluid">
    <Header />
    <div className="scrollbars">
      <div className="row">
        <SidebarNav />
        <Routes />
      </div>
    </div>
  </div>
)

export default App;
