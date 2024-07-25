import React from "react";
import { CardContent, Typography,Box, CardMedia, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Copyright from "./Copyright";
//import Box from "@mui/material";

const Footer= ({title,description}) =>{
    return(
        <Box component="footer" sx={{bgcolor:"background.paper", py:6}}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                component="p"
                color="text.secondary"
                >
                  {description} 
                </Typography>
                <Copyright/>
            </Container>
        
        </Box>
    )
}

export default Footer;