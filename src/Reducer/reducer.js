import { GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "./type";
 const init={
    isLoading:false,
    isError:false,
    data:[]
 }


export const reducer=(state=init,{type,payload})=>{
switch(type){
    case GET_WEATHER_REQUEST:{
        return {...state,isLoading:true}
    }
    case GET_WEATHER_SUCCESS:{
        return {...state,isLoading:false,data:payload}
    }
    case GET_WEATHER_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    default:{
        return state
    }
}
}