import React, { useEffect } from 'react';
import { Container, createTheme,CssBaseline,ThemeProvider } from '@mui/material';
//import MainFeaturedPost from './Components/MainFeaturedPost';
//import { mainFeaturePost } from './data';
//import FeaturedPet from './Components/FeaturedPet';
import Header from './Components/Header';
//import Grid from '@mui/material/Grid';
import Footer from './Components/Footer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from './redux/actions/categories';
import { BrowserRouter } from 'react-router-dom';
//import { fetchAllPets } from './redux/actions/pets';
import Router from './router';
import SnackBarComponent from './Components/SnackBarComponent';

const theme=createTheme({
  fontFamily: `"Trebuchet MS", "Helvetica", "Arial", "sans-serif"`,
  fontSize:14,
  fontWeightLight:300,
  fontWeightRegular:400,
  fontWeightMedium:500,
})

const sections=[{title:"All Pets",url:"/"}];



function App() {
  const dispatch=useDispatch();
  const allCategories=useSelector((state)=> state.categories.allCategories);
  

  useEffect(()=>{
    fetchAllCategories({dispatch});
    
  },[]);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <Container maxWidth="lg">
      <Header allCategories={[
        ...sections,
        ...allCategories.map((category) => ({
        title: category.name,
        url:`/${category?._id}`,
      }))]}/>
      {/*<MainFeaturedPost mainFeaturePost={mainFeaturePost}/>
      <Grid  container spacing={4}>
      {pets.map((pet)=>(
        <FeaturedPet key={pet._id} pet={pet}/>
      ))}
      
      
      </Grid>*/}
      <SnackBarComponent/>
    <Router/>
    </Container>
    <Footer title="Pet Adoption Center" description="Every pet deserves a Good Home"/>
    </BrowserRouter>
    
  
    </ThemeProvider>
  );
}

export default App;
