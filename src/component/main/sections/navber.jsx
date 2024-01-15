import { Box, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import MessageIcon from '@mui/icons-material/Message';
import PsychologyIcon from '@mui/icons-material/Psychology';
const Navber = () => {

  return (
    <>
        <Box component="div"  >
                <nav className="border border-1 rounded-pill p-2  ">
                    <ul className="list-unstyled text-center">
                        <li><a href="#Home"><HomeIcon/> </a></li>
                        <li><a href="#About"><PersonIcon/> </a></li>
                        <li><a href="#Resume"><BusinessCenterIcon/> </a></li>
                        <li><a href="#Service"><SettingsAccessibilityIcon/> </a></li>
                        <li><a href="#Skills"><PsychologyIcon/> </a></li>
                        <li><a href="#Testimonial"><MessageIcon/> </a></li>
                        <li><a href="#Contact"><MonetizationOnIcon/> </a></li>
                    </ul>
                </nav>
        </Box>
        
    </>
  )
}

export default Navber