import React, {Component} from 'react';
import './List.css';
import axios from '../axios-emp';
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

// import Emp from './Emp';


class list extends Component{

    state={
        data:[],
        keys:[],
        result:'',
        value:'',
        datafetch: 'NO',
        modalShow: false,
    };

    showEditModal =() => {
        return (
          <Modal
            show={this.state.modalShow}
            onHide={() =>this.setState({modalShow:false})}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                EDIT EMPLOYEE DETAILS
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
              <table class="table">
            <tr>
                <td>Enter Name</td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>Enter Designation</td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>Enter Date of Joining</td>
                <td><input type="date"></input></td>
            </tr>
            </table>


            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>{this.setState({modalShow:false})}}>Close</Button>
              <Button>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }

    // function to search the dataa
    getDataSearched = () =>{
        let ids=this.state.value;
        let p=0;
        this.state.data.map(data=>{
            if(data.id===ids){
                p=1;
                alert("Data Found");
                alert('Name: '+data.name+" Designation:"+data.desg+" Date of Joinig: "+data.doj);
            }
            return null;
        });

        if(p===1){
            this.setState({result:'Data Found'});           
        }
        else{
            this.setState({result:'Data Not Found'});
            alert("Data Not Found");
        }
    }
    // function to order the data
    showAcending = ()=>{
        let x=this.state.datafetch;
        if(x==='YES'){
                let d=this.state.data;
                for(var i=0;i<d.length-1;i++){
                    for(var j=i+1;j<d.length;j++){
                            if(parseInt(d[i].id)>parseInt(d[j].id)){
                                var z=d[i];
                                d[i]=d[j];
                                d[j]=z;                        
                            }
                    }
                }  
                this.setState({data:d});
            }
        else{
            alert("Fetch Data First");
        }   
                 }

    getDataHandler = () =>{
        axios.get("/data.json")
        .then(response=>{

            this.setState({data: Object.values(response.data)});
            this.setState({keys: Object.keys(response.data)});
            //console.log(Object.values(response.data));
            console.log(this.state.keys);

            this.setState({datafetch:'YES'}); //make sure data is fetched

        }).catch(err=>{
            console.log(err);
        });
        
    }

    dataDelete = (event) => {
        
        alert("The Data Deletion Complete for "+event.target.value);
        
    }

    // getDataDelete =(event) =>{
    //     const d=event.target.value;
    //     console.log(d);
        // axios.delete("/data.json", {data: d})
        // .then(response=>{
        //     console.log(response);
        //     alert("Data Deleted");
        // }).catch(err=>{
        //     console.log(err);
        //     alert("Error Occurred");
        // });
    // }

    render(){
        // console.log(this.state.data);
        // const datas=this.state.data.map(data=>{
        //     return <Emp id={data.id} name={data.name} desg={data.desg}  doj={data.doj}/>;
        // });

        const datas=this.state.data.map(data=>{
            return (
            <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.desg}</td>
                <td>{data.doj}</td>
                <td><Button variant="success" size="sm" value={data.id} onClick={this.dataDelete}>Delete</Button></td>
                <td><Button variant="success" size="sm" value={data.id} onClick={()=>{this.setState({modalShow:true})}}>Edit</Button></td>
            </tr>
        
            )
        });

    return(

        
        <div className="de1">
            <h2>List Employee</h2>
            <Button variant="success" size="sm" onClick={this.getDataHandler}>Fetch All Employees</Button>
            <Button variant="success" size="sm" onClick={this.showAcending}>Ascending Order</Button>
            <b/>
            <table class='table table-fixed table-responsive'>
            <thead class="thead-dark">
            <tr><th scope="col">ID</th>
                <th scope="col">Name</th> 
                <th scope="col">Designation</th> 
                <th scope="col">Date of Joining</th> 
                <th scope="col">Delete the Employee</th>
                <th scope="col">Edit Employee</th>
            </tr>
            </thead>
            <tbody>
            {datas}
            </tbody>
            </table>

            
            <form onSubmit={this.getDataSearched}>
            <label >Enter Employee Id :</label> <b/>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            <input type="submit" value="Submit" />
            </form>              

            <this.showEditModal/>
        </div>
    );
}

}

export default list;
