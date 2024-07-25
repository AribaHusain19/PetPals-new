import { SET_ADOPTION_LOADER } from "../actionTypes/adoptions";
const initialState={
    adoptionLoader:false,
};

const adoptionsReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case SET_ADOPTION_LOADER:
            return{
                ...state,
                adoptionLoader:payload
            }
        default:
            return state;
    }
}
export default adoptionsReducer;