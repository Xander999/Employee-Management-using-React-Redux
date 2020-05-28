import React, {Component} from 'react';
import './App.css';
import SideBar from "./sidebar";
import Dashboard from './Dashboard/Dashboard.js';
import Add from './Add/Add.js';
import List from './List/List.js';
import Home from './Home/home.js';
import {BrowserRouter, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import {connect} from 'react-redux';


class App extends Component{
  
  // state={
  //   showpg: 1
  // }


  changeSide = (x) => {
    if(x===1){
      // this.setState({showpg:1});
      this.props.showDashboard();
    }
    else if(x===2){
      // this.setState({showpg:2});
      this.props.showAdd();
    }
    else if(x===3){
      // this.setState({showpg:3});
      this.props.showList();
    }
  }
  render() {


    // let add=null;
    // let dashboard=null;
    // let list=null;

    // if(this.props.ctr===1){
    //   dashboard=(
    //       <Dashboard/>
    //   );
    // }
    // if(this.props.ctr===2){
    //   add=(
    //       <Add/>
    //      );
    // }
    // if(this.props.ctr===3){
    //   list=(
    //       <List/>
    //   );

    // }

 
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header sticky-top">
      <SideBar 
      click={(opt)=>this.changeSide(opt)}/>
      <h1>Xander Application</h1>
      </div>
      <div className='main-component'>
      {/* {dashboard}
      {add}
      {list} */}
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Add" component={Add} />
      <Route path="/List" component={List}/>
      </div>
    </div>
    </BrowserRouter>
  );

}

}

const mapStateToProps = state =>{
  return {
    ctr: state.redapp.showpg
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    showDashboard: () => dispatch({type: 'SHOW_DASHBOARD'}),
    showAdd: () => dispatch({type: 'SHOW_ADD'}),
    showList: () => dispatch({type: 'SHOW_LIST'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
