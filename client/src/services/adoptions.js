import axiosInstance from "./axiosinstance";

export const createAdoptions = (payload) => {
  console.log('Payload received in createAdoptions:', payload);
  return axiosInstance.post("/adoption/create", payload);
};