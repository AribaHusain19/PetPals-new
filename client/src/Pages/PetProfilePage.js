import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { useMemo } from 'react';
import { fetchPetById } from '../redux/actions/pets';
import { BACKEND_URI } from '../utils/constants';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AdoptionForm from '../Components/AdoptionForm';
import  Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'
//import AdoptionForm from "../../components/AdoptionForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




const PetProfilePage=()=>{
  const [open,setOpen]=useState(false);
  const { id }=useParams();
  const dispatch = useDispatch();
const selectedPet = useSelector((state) => state.pets.selectedPet);
const category = useSelector((state) => state.pets.category);

useEffect(() => {
  fetchPetById({ dispatch, payload: { id } });
}, [id,dispatch]);

const images = useMemo(() =>
 selectedPet?.additionalImages
    ? [
        BACKEND_URI + "/" + selectedPet?.image,
        ...selectedPet?.additionalImages.map(
          (image) => BACKEND_URI + "/" + image
        ),
      ]
    : [BACKEND_URI + "/" + selectedPet?.image],[selectedPet]
);


useEffect(() => {
  console.log('Image URLs:', images);
}, [images]);
  return (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
      <ImageList sx={{ height: 300 }} variant="woven" cols={3} gap={8}>
      {images?.map((item,index)=>(
          <ImageListItem key={index}>
            <Zoom> 
              <img src={`${item}`} width="160" loading="lazy"/>
              </Zoom>
         
          </ImageListItem>
      ))} 
      </ImageList>
      </Grid>
      <Grid item xs={12}  md={6}>
        <Typography variant='h3'>{selectedPet?.name}</Typography>
        <Typography variant='h5' color="text.secondary" className='line_height_40'>
          Breed- {selectedPet?.breed}
        </Typography>
        <Typography variant='h5' color="text.secondary" className='line_height_40'>
          Category- {category?.name}
        </Typography>
        <Typography variant='h5' color="text.secondary" className='line_height_40'>
          Age- {selectedPet?.age}
        </Typography>
        <Typography variant='h5' color="text.secondary" className='line_height_40'>
          Color- {selectedPet?.color}
        </Typography>
        <Typography variant='subtitle1' paragraph className='line_height_40'>
          {selectedPet?.description}
        </Typography>
        <Button variant="contained" onClick={()=>setOpen(true)}>Adopt</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 400, ...style }}>
            <Typography variant="h5" >
              Adoption Form
              
            </Typography>
            <AdoptionForm closeModal={()=> setOpen(false)}/>
          </Box>
        </Modal>
      </Grid>
  </Grid>)
}

export default PetProfilePage;