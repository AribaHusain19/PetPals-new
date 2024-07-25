import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import petsReducer from "./pets";
import adoptionsReducer from "./adoptions";
import snackBarReducer from "./snackbars";

const rootReducer=combineReducers({
    categories:categoriesReducer,
    pets:petsReducer,
    adoptions:adoptionsReducer,
    snackbar:snackBarReducer,
}
   
);

export default rootReducer;