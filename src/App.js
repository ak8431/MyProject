import React from 'react';
// import './App.css';
import Header from './components/header';
import SidebarNav from './components/sidebar';
import Routes from './controllers/routes';
import Div from './components/HtmlElements/Div';
// import Modal from './components/modal';
import FileContainer from './modules/file_preview/file_container';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibleClass : false,
      sidebarActiveClass : null,
      file : null
    }
    this.changeSidebarHandler = this.changeSidebarHandler.bind(this);
    this.fileData = this.fileData.bind(this);
  }

  componentDidMount(){
    let path = window.location.pathname;
    if(path==='/track-bug'){
      this.setState({sidebarActiveClass : 'track-bug'});
    }else if(path==='/report-bug'){
      this.setState({sidebarActiveClass : 'report-bug'});
    }else{
      console.log('not a valid address');
    }
  }

  changeSidebarHandler(){
    let visibleClass = this.state.visibleClass;
    this.setState({ visibleClass : !visibleClass});
  }

  changeSidebarActiveLink = (linkName) => {
    if(this.state.sidebarActiveClass === linkName){
      return false;
    }
    this.setState({sidebarActiveClass : linkName});
  }

  fileData(fileObj){
    console.log('called in API')
    this.setState({file : fileObj});
  }

  render(){
    return(
      <Div class="">
        <FileContainer file={this.state.file} />
        <Header changeSidebarHandler={this.changeSidebarHandler} />
        <Div class="scrollbars">
          <Div class="row">
            <SidebarNav changeSidebarActiveLink={this.changeSidebarActiveLink} visible={this.state.visibleClass} sidebarActive={this.state.sidebarActiveClass} />
            <Routes visible={this.state.visibleClass} fileAPI={this.fileData} />
          </Div>
        </Div>
      </Div>
    )
  }
}