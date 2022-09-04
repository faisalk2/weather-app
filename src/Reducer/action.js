import axios from "axios";
import { GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "./type"
// require("dotenv").config();


export const getweather=(payload)=>(dispatch)=>{
dispatch({type:GET_WEATHER_REQUEST});
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=a34753ea2a7c7db081a2cd3015ae5aa9`).then(res=>dispatch({type:GET_WEATHER_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_WEATHER_FAILURE}))
}