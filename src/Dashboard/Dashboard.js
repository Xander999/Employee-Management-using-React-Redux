import React, {Component} from 'react';
import './Dashboard.css';
// import axios from '../axios-emp';
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Spinner} from 'react-bootstrap';


import * as actionCreators from '../store/actions/action2'
import {connect} from 'react-redux';

//property for bar chart
const dfd = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'No of Employees',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [5,8,2,1,7]
    }
  ]
}

//propertires for pie chart
const dfd2={
  labels: ['Engineer', 'Manager', 'Tester','Analyst','Other'],
  datasets: [
    {
      label: 'Jobs',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [6, 5, 2, 8, 3]
    }
  ]
}

//properties for line graph
const dfd3={
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Engineers',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [6, 9, 8, 1, 5]
    }
  ]
}

class dashboard extends Component{
  state={
        data:[],         
    };  

    
    componentDidMount = () =>{
        // axios.get("/data.json")
        // .then(response=>{
        //     const x=Object.values(response.data);
            // this.setState({data: x});

            this.props.getdata();

            console.log("Getting data :");
            console.log(this.props.dt);

        // }).catch(err=>{
        //     console.log(err);
        // });

        this.render();
        
    }

    render(){ 
      const month=this.props.dt.map(x=>{
        return x.doj;
                });
      console.log(month); 

     const dd=[];
     for(var i=0;i<month.length;i++){
         dd.push(parseInt(month[i].substring(5,7)));
     }
     console.log(dd);
     const m=[0,0,0,0,0];
     for(i=0;i<dd.length;i++){
       m[dd[i]-1]=m[dd[i]-1]+1;
     }
     //console.log("m: "+[...m]); 
     dfd.datasets[0].data=Array.from(m);
     console.log("Bar");
     console.log(dfd.datasets[0].data);
     //--------------------------------------------
     
     
     const jobs=this.props.dt.map(x=>{
       return x.desg;
               });
       const q=[0,0,0,0,0];
       for(i=0;i<jobs.length;i++){
             if(jobs[i]==='Engineer'){
               q[0]=q[0]+1;
             }
             else if(jobs[i]==='Manager'){
               q[1]=q[1]+1;
             }
             else if(jobs[i]==='Tester'){
               q[2]=q[2]+1;
             }
             else if(jobs[i]==='Analyst'){
               q[3]=q[3]+1;
             }
             else{
               q[4]=q[4]+1;
             }
         }
         dfd2.datasets[0].data=Array.from(q);
         console.log("Pie");
         console.log(q);
         //-------------------------------------------------
         const dq=this.props.dt.map(x=>{
           if(x.desg==='Engineer'){
                 return x.doj;
                                 }
           else{
             return null;
           }
                   });
           console.log(dq);

       const dp=[];
     for(i=0;i<dq.length;i++){
       if(dq[i]===null){}
       else{
         dp.push(parseInt(dq[i].substring(5,7)));
       }
     }
     console.log(dp);

     const mp=[0,0,0,0,0];
     for(i=0;i<dp.length;i++){
       mp[dd[i]-1]=mp[dp[i]-1]+1;
     }
       console.log(mp);
       dfd3.datasets[0].data=mp;
                  

       let load=null;
       if(this.props.ld){
           load=(
             <div>
             <Spinner animation="border" variant="primary"/>
             {"  "}
             <div class="alert alert-success" role="alert">
             ...Data is being loaded from Database using GET operation...
            </div>
            </div>
           );
       }
    

  return(
    <div className='de1 shadow rounded'>
        <h2>Dashboard</h2> {" "} {load}

        {/* <button onClick={this.getDataHandler}>Refresh</button> */}
        <Bar
          height={80}
          data={dfd}
          options={{
            title:{
              display:true,
              text:'Frequency of Hiring Per Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
          }}
        />

          <Pie
          height={80}
          data={dfd2}
          options={{
            title:{
              display:true,
              text:'Job Postion Distribution',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Line
          data={dfd3}
          height={80}
          options={{
            title:{
              display:true,
              text:'Engineers Hired Per Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        
              
    </div>
);
}
}

const mapStateToProps = state =>{
  return {
    dt : state.reddas.data,
    ld: state.reddas.load,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getdata: () => dispatch(actionCreators.getAsycnData())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(dashboard);
