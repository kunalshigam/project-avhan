import React from 'react'
import SideMenuBar from '../Components/SideMenuBar'
import { Box, Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import ToggleSwitch from '../Components/ToggleSwitch';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CompanyPage() {

  return (
    <Grid container style={{ backgroundColor: '#c5dbf3', width: "100%", height: "100%" }} >
      <Grid item lg={1.5} xs={6} md={3} >
        <SideMenuBar />
        <div className="vertical-line" />
      </Grid>

      <Grid item lg={10.5} xs={6} md={3} style={{ backgroundColor: '#c5dbf3', width: "100%", height: "100%" }} py={2}>
        <Link to={'/'}>Home</Link>
        <div className='bgColor'>
          <Grid display="flex" justifyContent="start" alignItems="start" flexDirection="row" >
            <Grid xs={6} lg={3} md={3} height="50" width="50" my={5} py={3}>
              <div className="container">
                <img className="image" src="/images/Ellipse 1.png" alt="Image Icon" style={{ width: '180px', height: '180px', margin: 'auto' }} />
                <img className="editIcon" src="/images/Group 86.png" alt="Edit Icon" style={{ marginRight: "10px" }} />
              </div>
            </Grid>
            <Grid display={"flex"} flexDirection="column" >
              <Grid xs={6} lg={12} md={6} marginLeft={'50px'} height="50" width="50" paddingY={5} display="flex" flexDirection="row" my={5} py={5} >
                <Typography variant="h5" gutterBottom >
                  My Company
                </Typography>
                <div className="container" style={{ marginLeft: '100px' }}>
                  <img className="editIcon" src="/images/Group 84.png" alt="Edit Icon" />
                </div>
              </Grid>
              <Grid xs={6} lg={6} md={6} height="50" width="50" paddingY={5} display="flex" flexDirection="row" >
                <ToggleSwitch />
              </Grid>
            </Grid>
          </Grid>
          <Grid display="flex" justifyContent="start" alignItems="start" flexDirection="column" width={"50%"} my={5} >
            <input className="rounded-textfield" type="text" placeholder="Company name" />
          </Grid>
          <Grid display="flex" justifyContent="start" alignItems="start" flexDirection="column" width={"40%"} py={3}>
            <input className="rounded-textfield" type="text" placeholder="Company BBP" />
          </Grid>
          <Grid display={'flex'} flexDirection="row">
            <Grid display="flex" justifyContent="start" alignItems="start" flexDirection="column" width={"15%"} py={5} px={3}>
              <Grid display="flex" flexDirection="row">
                <Typography variant="h5" gutterBottom >
                  Departments
                </Typography>
                <div className="container" style={{ marginLeft: '50px' }}>
                  <img className="editIcon" src="/images/Vector 23.png" alt="Edit Icon" />
                </div>
              </Grid>
              <Divider className="horizontal-line" sx={{ borderBottomWidth: 5 }} />
            </Grid>
            <Grid display="flex" justifyContent="start" alignItems="start" flexDirection="column" width={"15%"} py={5} px={3} container disableGutters >
              <Grid display="flex" flexDirection="row">
                <Typography variant="h5" gutterBottom >
                  Contacts
                </Typography>
                <div className="container" style={{ marginLeft: '50px' }}>
                  <img className="editIcon" src="/images/Vector 23.png" alt="Edit Icon" />
                </div>
              </Grid>
              <Divider className="horizontal-line" sx={{ borderBottomWidth: 5 }} />
            </Grid>
          </Grid>
          <Grid display={'flex'} flexDirection="row" mx={5} mb={5} pb={5}>
            <Grid marginLeft={5}>
              <Button variant="outlined" color="success">
                IT Team
              </Button>
            </Grid>
            <Grid marginLeft={5}>
              <Button variant="outlined" color="success">
                Sales Marketing
              </Button>
            </Grid>
            <Grid marginLeft={5} height="50" width="50">
              <div className="container">
                <img className="image" src="/images/Vector 15.png" alt="Image Icon" style={{ width: '20px', height: '20px', margin: 'auto', marginTop: '6px' }} />
              </div>
            </Grid>
          </Grid>
          <Grid style={{ position: 'absolute', top: 0, right: 0, marginRight: "15px", marginTop: "20px" }} py={5} my={5}>

            <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
            <Grid style={{ position: 'absolute', top: 0, right: 15, marginLeft: "20px", marginTop: "18px" }} py={5}>
              <SearchIcon />
            </Grid>
          </Grid>
          <Grid style={{ position: 'absolute', bottom: 180, right: 0, marginRight: "20px", marginBottom: "20px" }} >
            <Grid>
              <Button variant="contained" color="primary" style={{ marginRight: "20px" }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>

  )
}

export default CompanyPage