import { Typography } from "@mui/material";
import React from "react";

const Copyright=()=>{
    return(
        <Typography variant="body2" align="center" color="text.secondary">
            {"Copyright ©"}
            PetPals {new Date().getFullYear()}

        </Typography>
    )
}

export default Copyright;