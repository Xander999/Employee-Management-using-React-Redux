import axios from '../../axios-emp';


//create synchronus method to show data has been posted
export const getDataHandler1 = (x) =>{
    return {
        type : 'DATA_GET',
        val: x
    };
    
};

// add synchronous method to asynchronus method
//this method post the data and after that calls postDataHandler1 method to update the state that
//data has been posted.
export const getAsycnData =(data) => {
    return dispatch => {
        setTimeout(() => {
        axios.get("/data.json")
        .then(response=>{
        const x=Object.values(response.data); 
        dispatch(getDataHandler1(x));

         }).catch(err=>{
        console.log(err);
         });
        },1000);
    };
};