import axios from 'axios' 
import {API_REQ,API_SUC,API_FAIL} from '../Constant'
export const marvelcomicdata = () =>
async (dispatch) =>{
      try{
        dispatch({type:API_REQ})
        let res= await axios.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=99e9936c87d485c889aa77e299bdda7c&ts=1&hash=ae1895a77e42f57a2ff88de40c57a3e6&limit=100`)
           dispatch({type:API_SUC,payload:res})  
    }catch(err){
        dispatch({type:API_FAIL,payload:err})
    }
}
export const cartdata = (cartitemdata) =>{
    // console.log("cartitemdata",cartitemdata);
    return{
        type:"cart_item",
        payload:cartitemdata
    }
}
export const Remove = (rr) =>{
    return{
        type:"REMOVE",
        payload:rr
    }
}