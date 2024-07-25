import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FeaturedPet from "../Components/FeaturedPet";
import { Link,useParams } from "react-router-dom";
import { fetchPetByCategory } from "../redux/actions/pets";
import { useDispatch, useSelector } from "react-redux";

const CategorizedAnimalsPage = () => {
  const {category}=useParams();
  const dispatch = useDispatch();
  const petsByCategory = useSelector((state) => state.pets.petsByCategory);

  useEffect(() => {
    fetchPetByCategory({ dispatch, payload: { category } });
  }, [category,dispatch]);
  console.log({petsByCategory});
  return (
    <Grid container spacing={4}>
      {petsByCategory?.map((pet) => (
         
        <FeaturedPet key={pet._id} pet={pet} />
    
      ))}
    </Grid>
  );
};

export default CategorizedAnimalsPage;