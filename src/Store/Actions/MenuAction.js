import axios from 'axios';

export const GetMenudata = (dispatch) => {
    return {
        user: axios.get("https://food-delight-api.herokuapp.com/imageget").then((result) => {
            dispatch(MenuData(result.data));
        }).catch(err=>{
            if(err){ throw err };
        })
}
}

export function MenuData(data){
    return{
        type: "USER_DATA",
        data
    }
}