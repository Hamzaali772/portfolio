import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import MessageIcon from '@mui/icons-material/Message';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material';
const Menu = () => {
        const arr = [InstagramIcon,TwitterIcon,FacebookIcon]
  return (
    <>
            <Box className="menu-nav h-100 d-flex flex-column justify-content-center align-items-center " sx={{backgroundColor:'#191919',width:{xs:"50%",md:"25%"}}}>
                <Box className="d-flex flex-column justify-content-around align-items-center ">
                    <nav  >
                        <h5 className='mb-5' style={{color:"white"}}>Menu</h5>
                        <ul className="list-unstyled  ">
                            <li ><a href="#Home"><HomeIcon/> Home </a></li>
                            <li><a href="#About"><PersonIcon/> About </a></li>
                            <li><a href="#Resume"><BusinessCenterIcon/> Resume </a></li>
                            <li><a href="#Service"><SettingsAccessibilityIcon/> Service </a></li>
                            <li><a href="#Skills"><PsychologyIcon/> Skill </a></li>
                            <li><a href="#Testimonial"><MessageIcon/> Testimonial </a></li>
                            <li><a href="#Contact"><MonetizationOnIcon/> Contact </a></li>
                        </ul>
                    </nav>
                    <div  className='my-5'>
                        <h5 className='mb-3' style={{color:"white"}}>Social</h5>
                        <div className="d-flex">
                        {arr.map((Icon, i) => (
                            <Box
                            key={i} 
                            component='div'
                            className='px-1 py-0  mx-1 border border-1 d-inline-block '
                            sx={{ borderRadius: '100%',color:"#aaa" }}
                            >
                            <Icon sx={{fontSize:"15px"}} />
                            </Box>
                        ))}
                        </div>
                    </div>
                </Box>
            </Box>
    </>
  )
}

export default Menu