const initialState={
    id:'',
    name:'',
    desg:'',
    doj:'' ,
    loading: false
}

const reducer_add = (state=initialState, action) => {
    if(action.type==='ADD_ID'){
        console.log(action.val);
        return{
            ...state,
            id: action.val
        }
    }
    if(action.type==='ADD_NAME'){
        console.log(action.val);
        return{
            ...state,
            name: action.val
        }
    }
    if(action.type==='ADD_DESG'){
        console.log(action.val);
        return{
            ...state,
            desg: action.val
        }
    }
    if(action.type==='ADD_DOJ'){
        console.log(action.val);
        return{
            ...state,
            doj: action.val
        }
    }
    if(action.type==='SHOW_LOADER'){
        console.log('...................Loading Begins........');
        return{
            ...state,
            loading:true
        }
    }
    if(action.type==='DATA_POSTED'){
        console.log('.................Data Posted');
        return{
            ...state,
            id:'',
            name:'',
            doj:'',
            desg:'',
            loading: false
        }
    }

    return state;
};

export default reducer_add;