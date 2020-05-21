import React, {Component} from 'react';
import './List.css';
import axios from '../axios-emp';
// import Emp from './Emp';


class list extends Component{

    state={
        data:[],
        keys:[],
        result:'',
        value:'',
        datafetch: 'NO'
    };

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
                <td>{data.id}</td><td>{data.name}</td><td>{data.desg}</td><td>{data.doj}</td><td><button value={data.id} onClick={this.dataDelete}>Delete</button></td>
            </tr>
        
            )
        });

    return(
        <div className="de1">
            <h2>List Employee</h2>
            <button onClick={this.getDataHandler}>Fetch All Employees</button>
            <button onClick={this.showAcending}>Ascending Order</button>
            <b/>
            <table>
            <div id="table-header">
            <td> <b> ID  </b> </td> <td> <b> Name </b> </td> <td> <b> Designation </b> </td>  <td> <b> Date of Joining </b> </td> <td> <b>  Delete the Employee</b> </td>
            {datas}
            </div>
            </table>

            
            <form onSubmit={this.getDataSearched}>
            <label >Enter Employee Id :</label> <b/>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            <input type="submit" value="Submit" />
            </form>

                  
            <b/><b/>
            
  
        </div>
    );
}

}

export default list;
