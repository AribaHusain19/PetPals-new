import axiosInstance from "./axiosinstance"

export const getAllPets = () =>{
    return axiosInstance.get("/pets/all");
};

export const getPetByCategory= ({category}) =>{
    return axiosInstance.get(`/pets/category/${category}`);
};


export const getPetById= ({id}) =>{
    return axiosInstance.get(`/pets/get/${id}`);
};

export const getCategoryById=({id}) =>{
    return axiosInstance.get(`/category/get/${id}`);
};
