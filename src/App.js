import React from 'react';
// import './App.css';
import Header from './components/header';
import SidebarNav from './components/sidebar';
import Routes from './controllers/routes';
import Div from './components/HtmlElements/Div';
// import Modal from './components/modal';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibleClass : false
    }
    this.changeSidebarHandler = this.changeSidebarHandler.bind(this);
  }

  changeSidebarHandler(){
    let visibleClass = this.state.visibleClass;
    this.setState({ visibleClass : !visibleClass});
  }

  render(){
    return(
      <Div class="container-fluid">
        <Header changeSidebarHandler={this.changeSidebarHandler} />
        <Div class="scrollbars">
          <Div class="row">
            <SidebarNav visible={this.state.visibleClass} />
            <Routes visible={this.state.visibleClass} />
          </Div>
        </Div>
      </Div>
    )
  }
}