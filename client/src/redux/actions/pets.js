import { getAllPets,getPetByCategory,getPetById,getCategoryById} from "../../services/pets";
import { GET_ALL_PETS, GET_PET_BY_ID, GET_PETS_BY_CATEGORY,GET_CATEGORY_BY_ID } from "../actionTypes/pets";

export const fetchAllPets =({dispatch})=>{
    getAllPets()
    .then(({data})=>{
        dispatch({
            type:GET_ALL_PETS,
            payload:data,
        });
    })
    .catch((error)=>{
        console.log(error);
        dispatch({
            type:GET_ALL_PETS,
            payload:[],
        });
    });
}



export const fetchPetByCategory =({dispatch,payload})=>{
   
    getPetByCategory(payload)
    .then(({data})=>{

        //const categories=await getCategories();
        dispatch({
            type:GET_PETS_BY_CATEGORY,
            payload:data,
            //categories,
        });
    })
    .catch((error)=>{
        console.log(error);
        dispatch({
            type:GET_PETS_BY_CATEGORY,
            payload:[],
            //categories:[],
        });
    });
}

export const fetchPetById =({dispatch,payload})=>{
    
    getPetById(payload)
    .then(({data})=>{
        console.log('Pet data fetched:', data); 
        dispatch({
            type:GET_PET_BY_ID,
            payload:data,
        });
        if (data.category) {
            getCategoryById({ id: data.category })
                .then(({ data: categoryData }) => {
                    dispatch({
                        type: GET_CATEGORY_BY_ID,
                        payload: categoryData,
                    });
                })
                .catch((error) => console.log(error));
        }
    })
    .catch((error)=>{
        console.log(error);
        dispatch({
            type:GET_PET_BY_ID,
            payload:[],
        });
    });
}