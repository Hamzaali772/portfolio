import React, { useState } from 'react'
import {Grid,Box} from '@mui/material/'
import Owner from './main/owner/owner.jsx'
import Layout from './main/sections/layout.jsx'
import Navber from './main/sections/navber.jsx'
import Menu from './main/menu.jsx'

const Main = () => {
    const [menuBar, setMenuBar] = useState();

    const toggleMenuBar = (value) => {
      setMenuBar(value);
      const wrapperElement = document.getElementById("wrapper");
      if (value) {
        wrapperElement.style.opacity = "0.5";
      } else {
        wrapperElement.style.opacity = "1";
      }
    };
    const handleWrapperClick = () => {
        if(menuBar){
            toggleMenuBar(!menuBar);
        }
      };
  return (
    <>
        <Box component="div" className="position-relative" sx={{p:{xs:2,md:5}}}    >
            <Grid container id="wrapper" onClick={handleWrapperClick}>
                <Grid item xs={12} md={5} lg={3} >
                    <Box  component="div" sx={{position:{md:'fixed',xs:'none'},top:20,margin:'0 auto',width:{md:'30%',xs:'100%'}}}>
                    <Owner gettoggleMenuBar={toggleMenuBar} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} lg={8}  >
                    <Layout/>
                </Grid>
                <Grid xs={12} md={7} lg={1}  >
                <Box component="div" className="flex-column justify-content-center align-items-center "  sx={{ position: { md: 'fixed', xs: 'relative' }, height: '90vh', display: { xs: 'none', md: 'flex' }, }}>
                    <Navber/>
                </Box>
                </Grid>
            </Grid>
            {menuBar ? <Menu/> : '' }
        </Box>

    </>
  )
}

export default Main