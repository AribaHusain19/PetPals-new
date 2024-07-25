import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
//import MainFeaturedPet from "../../components/MainFeaturedPet";
import {mainFeaturePost } from "../data";
import FeaturedPet from "../Components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../redux/actions/pets";
import MainFeaturedPost from "../Components/MainFeaturedPost";

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);

  useEffect(() => {
    fetchAllPets({ dispatch });
  }, []);

  return (
    <>
      <MainFeaturedPost post={mainFeaturePost} />
      <Grid container spacing={4}>
        {/* define the spacing between the components childs */}
        {pets?.map((pet) => (
          <FeaturedPet key={pet._id} pet={pet} />
        ))}
      </Grid>
    </>
  );
};

export default Homepage;