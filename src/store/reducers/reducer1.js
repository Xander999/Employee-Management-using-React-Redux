const initialState={
    showpg: 1
}

const reducer1 = (state=initialState, action) => {
    if(action.type==='SHOW_DASHBOARD'){
        return {
            ...state,
            showpg: 1
        }
    }
    if(action.type==='SHOW_ADD'){
        return {
            ...state,
            showpg: 2
        }
    }
    if(action.type==='SHOW_LIST'){
        return {
            ...state,
            showpg: 3
        }
    }
    return state;
}

export default reducer1;