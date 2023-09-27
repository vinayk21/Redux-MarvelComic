import {API_REQ,API_SUC,API_FAIL} from '../Constant'
// const initialState = {
//   state:[],
//   loading:false,
//   error:null
// }
export const marvelcomicreducers = (state=[] ,actions) =>{
  switch(actions.type){
    case API_REQ:
        return{sta:[],loading:true}
    case API_SUC:
        return{sta:actions.payload,loading:false}
    case API_FAIL:
        return{sta:[],error:actions.payload} 
    default :
     return state;         
  }
}
export const cartitemreducers = (state=[],actions) =>{
  switch(actions.type){
    case "cart_item":
      return[...state,actions.payload]
      default:return state
  }

} 
export const removereducers = (state=[],actions) =>{
  switch(actions.type){
    case "REMOVE": return [...state,actions.payload]
    default:return state;
  }
} 