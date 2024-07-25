import { GET_ALL_CATEGORIES } from "../actionTypes/categories";
const initialState={
    allCategories:[],
};

const categoriesReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                allCategories:payload
            }
        default:
            return state;
    }
}
export default categoriesReducer;