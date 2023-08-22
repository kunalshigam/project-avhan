import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, TextField } from '@mui/material';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';



function Home() {

    return (
        <>
            <div>
                <Box
                    position="fixed"
                    top={0}
                    left={0}
                    height="100vh"
                    width={20}
                    bgcolor="primary.main" 
                />
                <Grid container mx={'auto'}>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </Grid>
            </div >
        </>
    )
}

export default Home