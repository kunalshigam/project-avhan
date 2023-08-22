import { Box, Grid, Paper, TextField } from '@mui/material'
import React from 'react'

function Section2() {
    return (
        <Grid item xs={12} lg={4} md={4} sm={12} mx='auto'>
            <Paper elevation={3} style={{ padding: '20px' }} >
                <Box display="flex" justifyContent="center" alignItems="center" height="50" width="50" paddingY={5} marginY={2}>
                    <img src="/images/Frame 92.png" alt="Frame" style={{ width: '180px', height: '180px', margin: 'auto' }} />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" height="50" width="50" paddingY={5} marginY={5}>
                    <img src="/images/icon-chat.png" alt="chat" style={{ width: '50px', height: '50px', margin: 'auto' }} />
                    <img src="/images/icon-phone.png" alt="phone" style={{ width: '50px', height: '50px', margin: 'auto' }} />
                    <img src="/images/icon-video.png" alt="video" style={{ width: '50px', height: '50px', margin: 'auto' }} />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50" paddingY={5} marginY={5}>
                    <TextField label={'Search Here.....'} id="margin-normal" margin="normal" />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50" paddingY={5} marginY={5}>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Section2