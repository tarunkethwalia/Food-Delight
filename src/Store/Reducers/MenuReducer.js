const initState = {
    cards : []
}

const menuReducer = (state = initState,action) => {
    if(action.type === "USER_DATA"){
        return {
         ...state,
         cards: action.data 
        }
    }
    else{
    return state;
    }
}

export default menuReducer;