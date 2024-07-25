import axiosInstance from "./axiosinstance"

export const getAllCategories = () =>{
    return axiosInstance.get("/category/all");
}