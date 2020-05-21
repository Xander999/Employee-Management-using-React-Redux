const initialState={
   data:[]
}

const reducer_dashboard = (state=initialState, action) => {
    
    if(action.type==='DATA_GET'){
        console.log('Data Got');
        return{
            ...state,
            data : action.val
        }
    }

    return state;
};

export default reducer_dashboard;