const initialState={
   data:[],
   load:false
}

const reducer_dashboard = (state=initialState, action) => {
    
    if(action.type==='DATA_GET'){
        console.log('...................Data Received........');
        return{
            ...state,
            data : action.val,
            load : false
        }
    }
    if(action.type==='SHOW_LOADER_DASH'){
        console.log('...................Loading Begins........');
        return{
            ...state,
            load:true
        }
    }

    return state;
};

export default reducer_dashboard;