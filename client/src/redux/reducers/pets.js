import { GET_ALL_PETS, GET_PETS_BY_CATEGORY,GET_PET_BY_ID,GET_CATEGORY_BY_ID } from "../actionTypes/pets";

const initialState={
    allPets:[],
    petsByCategory:[],
    selectedpet:[],
    category:{},
    //categories:[],
};

const petsReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_PETS:
            return{
                ...state,
                allPets:payload
            };
            case GET_PETS_BY_CATEGORY:
                return{
                    ...state,
                    petsByCategory:payload,
                    //categories:payload.categories,
                };
            case GET_PET_BY_ID:
                return{
                    ...state,
                    selectedPet:payload
                };
                case GET_CATEGORY_BY_ID: // Handle category data
                return {
                    ...state,
                    category: payload,
                };
        default:
            return state;
    }
}
export default petsReducer;