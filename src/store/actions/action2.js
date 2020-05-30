import axios from '../../axios-emp';

//create synchronus method to show data has been posted
export const getDataHandler1 = (x) =>{
    return {
        type : 'DATA_GET',
        val: x
    };
    
};

export const showLoader = () =>{
    return{
        type: 'SHOW_LOADER_DASH'
    };
};

// add synchronous method to asynchronus method
//this method post the data and after that calls postDataHandler1 method to update the state that
//data has been posted.
export const getAsycnData =(data) => {
    return dispatch => {
        dispatch(showLoader());   //loading is started........
        setTimeout(() => {
        axios.get("/data.json")
        .then(response=>{
        const x=Object.values(response.data); 
        dispatch(getDataHandler1(x));  // loading is finished.....

         }).catch(err=>{
        console.log("Error:"+err);
         });

        },2000);
    };
};