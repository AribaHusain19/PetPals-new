import { SHOW_SNACKBAR,HIDE_SNACKBAR } from "../actionTypes/snackbar";
const initialState={
    open:false,
    type:"success",
    message:"",
};

const snackBarReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case SHOW_SNACKBAR:
            return{
                ...state,
                open:true,
                message:payload?.message,
                type:payload?.type,
            };
            case HIDE_SNACKBAR:
                return{
                    ...state,
                    open:false,
                    message:payload?.message,
                    type:payload?.type,
                };
        default:
            return state;
    }
}
export default snackBarReducer;