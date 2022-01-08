import React from 'react';
import {Container, Grid} from "@mui/material";



const Section = ({spacing,children}) => {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={spacing||4}>
                {children}
            </Grid>

        </Container>
    )
}

export default Section;