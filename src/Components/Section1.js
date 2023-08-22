import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Section1() {
    return (
        <Grid item xs={12} lg={4} md={4} sm={12} >
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Box display="flex" justifyContent="center" alignItems="center" height="50" width="50" paddingY={5}>
                    <img src="/images/Rectangle 366.png" alt="logo" style={{ width: '180px', height: '180px', margin: 'auto' }} />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50" paddingY={5}>
                    <Typography variant="h3" gutterBottom color={"red"} style={{ textDecoration: 'underline' }} >
                        Kunal Nitin Shigam
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom >
                        ReactJS Developer
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Department - Frontend Development
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50" paddingY={5}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom >
                        Company Address
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Address Line 1
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Address Line 2
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Address Line 3
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Maharastra 400028, India
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Section1