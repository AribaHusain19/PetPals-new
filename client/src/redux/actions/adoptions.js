import { createAdoptions } from "../../services/adoptions";
import { SET_ADOPTION_LOADER } from "../actionTypes/adoptions";
import { showSnackbar } from "./snackbar";

export const createAdoption =({dispatch,payload})=>{
    console.log('Inside createAdoption function', payload);
    dispatch({
        type:SET_ADOPTION_LOADER,
        payload:true,
    });
    createAdoptions(payload)
    .then((response)=>{
        console.log('Adoption creation response:', response);
        showSnackbar({
            dispatch,
            payload:{
                message:"Adoption requested!",
                type:"success",
            },
        });
        dispatch({
            type:SET_ADOPTION_LOADER,
            payload:false,
        });
    })
    .catch((error)=>{
        console.log(error);
        showSnackbar({
            dispatch,
            payload:{
                message:"Error Occurred!",
                type:"Danger",
            },
        });
        dispatch({
            type:SET_ADOPTION_LOADER,
            payload:false,
        });
    });
}