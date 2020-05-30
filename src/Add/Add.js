import React, {Component} from 'react';
import './Add.css';
// import axios from '../axios-emp';
import {Spinner} from 'react-bootstrap';
import * as actionCreators from '../store/actions/action'
import {connect} from 'react-redux';

import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class add  extends Component{

    // state={
        // id:'',
        // name:'',
        // desg:'',
        // doj:'' ,
        // result:''
    // }


    postDataHandler = () =>{
        const data={
            id: this.props.idd,
            name: this.props.nmm,
            desg: this.props.des,
            doj: this.props.dte
        }
        console.log(data);
        this.props.postdata(data);
        // axios.post("/data.json", data)
        // .then(response=>{
        //     console.log(response);
        //     this.setState({result:'Successfully Entered Data'});
        //     alert('Sucessfully Entered');
            
        // }).catch(err=>{
        //     console.log(err);
        //     this.setState({result:'Failed: Error Occured'});
        // });

    }
    render(){

        let load=null;
        console.log("ADD LOAD ::::"+this.props.loading);
        if(this.props.loading){
            load=(
                <div>
              <Spinner animation="border" variant="primary"/>
              <div class="alert alert-success" role="alert">
             ...Data is being stored into Database using POST operation...
                </div>
              </div>
            );
        }

    return(
        <div className="de1 shadow rounded ">
            {/* <div class="shadow p-3 mb-5  rounded w-50 p-3"> */}
            <h2>Add Employee</h2> {"  "} {load}
            
            <tr>
                <td><label class=" col-form-label">Enter Employee Id</label></td>
                <td><input class="form-control form-control-sm" type='text' value={this.props.idd} onChange={(event) => this.props.addid(event.target.value)}></input></td>
            </tr>
            <tr>
                <td><label class="col-form-label">Enter Name</label></td>
                <td><input class="form-control form-control-sm" type="text" value={this.props.nmm} onChange={(event) => this.props.addname(event.target.value)}></input></td>
            </tr>
            <tr>
                <td><label class="col-form-label">Enter Designation</label></td>
                <td><input class="form-control form-control-sm" type="text" value={this.props.des} onChange={(event) => this.props.adddesg(event.target.value)}></input></td>
            </tr>
            <tr>
                <td><label class="col-form-label">Enter Date of Joining</label></td>
                <td><input class="form-control form-control-sm" type="date" value={this.props.dte} onChange={(event) => this.props.adddoj(event.target.value)}></input></td>
            </tr>
            
           
            <button onClick={this.postDataHandler} type="button" class="btn btn-success">Enter</button>
            <b/> <b/>
            
            {/* <b>{this.state.result}</b> */}

            
                  
        </div>
        
    );
}

}

const mapStateToProps = state =>{
    return {
      idd: state.redadd.id,
      nmm: state.redadd.name,
      des: state.redadd.desg,
      dte: state.redadd.doj,
      loading: state.redadd.loading
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return {
      addid: (x) => dispatch({type: 'ADD_ID', val : x}),
      addname: (x) => dispatch({type: 'ADD_NAME', val : x}),
      adddesg: (x) => dispatch({type: 'ADD_DESG', val : x}),
      adddoj: (x) => dispatch({type:'ADD_DOJ', val : x}),
      postdata: (a) => dispatch(actionCreators.postAsycnData(a))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(add);
