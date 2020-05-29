import axios from '../../axios-emp';


//create synchronus method to show data has been posted
export const postDataHandler1 = () =>{
    return {
        type : 'DATA_POSTED'
    };
    
};

export const showLoader = () =>{
    return{
        type: 'SHOW_LOADER'
    };
};


// add synchronous method to asynchronus method
//this method post the data and after that calls postDataHandler1 method to update the state that
//data has been posted.
export const postAsycnData =(data) => {
    return dispatch => {
        dispatch(showLoader());   //loading is started........
        setTimeout(() => {

    axios.post("/data.json", data)
    .then(response=>{
        console.log(response);
        alert('Sucessfully Entered');
        dispatch(postDataHandler1());  // loading is finished.....
        
    }).catch(err=>{
        console.log(err);
    });
        },5000);

    };
};