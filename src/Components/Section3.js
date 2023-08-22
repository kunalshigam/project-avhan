import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Section3() {
    return (
        <Grid item xs={12} lg={4} md={4} sm={12} mx='auto' py={1}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Link to={'/company'}>Company Page</Link>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" height="50" width="50" paddingY={5} marginY={4}>
                    <video controls width="440" height="240">
                        <source src="/images/video.mp4" type="video/mp4" />
                        {/* <source src="/images/video.webm" type="video/webm" /> */}
                        Your browser does not support the video tag.
                    </video>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50" paddingY={5} marginY={5}>
                    <Typography variant="h3" fontWeight="bold" color={'red'} py={3}>
                        OFFER SECTION:-
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color={'orange'} >
                        “Get 20% off your first purchase with ABC Company. Shop now to start saving!”
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color={'green'}>
                        “Get 100% off your first purchase with ABC Company. Shop now to start saving!”
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color={'blue'}>
                        “Get 20% off your first purchase"
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Section3