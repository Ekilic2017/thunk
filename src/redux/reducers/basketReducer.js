import { act } from "react";
import ActionTypes from "../actionTypes";

const initialState={
    isLoading:false,
    error:false,
    data:[],
}
const basketReducer=(state=initialState,action)=>{
    console.log(action)
    
    switch (action.type){
        case ActionTypes.CART_LOADING:
            return{...state,isLoading:true};
        case ActionTypes.CART_ERROR:
           return{...state,isLoading:false,
            error:action.payload}
        case ActionTypes.CART_SUCCESS:
            return{...state,isLoading:false,error:false,data:action.payload}
        case ActionTypes.ADD_TO_CART:
            console.log(action)
            return{...state,
                error:false,
                isLoading:false,
                data:state.data.concat(action.payload),
            }
            case ActionTypes.UPDATE_CART:
              const updateArr= state.data.map((i)=>i.id===action.payload.id ? action.payload:i)
                return{...state,data:updateArr};
            case ActionTypes.DELETE_FROM_CART:
                const filtered=state.data.filter((i)=>i.id !==action.payload)
             return{...state,data:filtered}
    default :
    return state;
        }
   
}
export default basketReducer;