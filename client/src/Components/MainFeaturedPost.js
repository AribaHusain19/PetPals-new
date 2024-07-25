import React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box"
import { Grid, Typography } from "@mui/material";
const MainFeaturedPost=({mainFeaturePost})=>{

    if (!mainFeaturePost) {
        return null; // Or you can return a loading indicator or placeholder content
    }

    return(
    <>
    <Paper
    sx={{
        position:'relative',
        backgroundColor:'grey.800',
        color:'#fff',
        mb:4,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundImage:`url(${mainFeaturePost.image})`,
    }}>
        <Box
        sx={{
           // position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0,
            backgroundColor:"rgba(0,0,0,0.3)",
        }}>
            <Grid container>
                <Grid item md={4}>
                    <Box
                    sx={{
                        position:"relative",
                        p:{xs:3,md:6},
                        pr:{md:8}
                    }}>
                        <Typography component="h2" variant="h3" color="inherit">{mainFeaturePost.title}</Typography>
                        <Typography component="h5" color="inherit">{mainFeaturePost.description}</Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>

    </Paper>
    </>
    )
};
export default MainFeaturedPost;