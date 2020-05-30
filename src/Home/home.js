import React, {Component} from 'react';
import './home.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class home extends Component{

      
render(){

    return(
        <div class="jumbotron de1">
  <h1 class="display-4">Welcome Customer!</h1>
  <p class="lead">This is a Employee management portal where one can insert, delete and edit details of an employee along with this other features such as 
  a statiscal dashboard has been maintained in order to perform analysis on different factors over customer.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for maintaing analytics over different fields. Press  the button to see the evaluation</p>
  <Button class="btn btn-primary btn-lg" href="/Dashboard" role="button">Show Analysis </Button>
  </div> 
        
    );
}

}
export default home;
