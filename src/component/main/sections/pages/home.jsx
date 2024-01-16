import { Box,  Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import roundText from '../../../../assets/images/roundtxt.png'
const Home = () => {
    
    return (
        <>
            <Box id="Home" component='div' sx={{px:{xs:0,md:3,lg:20}}} py={4}>
                <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                    <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <HomeIcon/> INTRODUCATION</Typography>
                </Box>
                <Box className="mb-3 mb-md-5 ">
                <Typography data-aos="fade-up" className='mb-3 mb-md-5 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'4rem' } }}>
                    Say Hi from <span style={{ color: '#28E98C' }}>Hamza</span>, <br />
                    Front-End and Back-End Developer
                </Typography>
                <Typography data-aos="fade-right" variant="body1" color="#aaa">I design and code beautifully simple things and i love what i do. Just simple like that!</Typography>
                </Box>
                <Box className="mb-3  overflow-hidden ">
                    <Box data-aos="fade-left"  className="float-end position-relative arrow-down px-1  ">
                        <a href="">
                            <ion-icon className="" name="arrow-down-outline"></ion-icon>
                            <img src={roundText} className='roundImg' alt="" />
                        </a>
                    </Box>
                </Box>
                <Box className="mb-3 mb-md-5 d-flex">
                    <Box mr={10} data-aos="zoom-in-up">
                        <span style={{fontSize:'4rem',color:"#28E98C",display:'block'}}>10+</span>
                        <Typography variant="body1" color="white">
                        YEARS OF<br/> EXPERIENCE</Typography>
                    </Box>
                    <Box sx={{overflowX:'hidden'}} data-aos="zoom-in-up">
                        <span style={{fontSize:'4rem',color:"#28E98C",display:'block'}}>182+</span>
                        <Typography variant="body1" color="white">
                        PROJECTS COMPLETED ON <br/>
                        15 COUNTRIES</Typography>
                    </Box>
                </Box>
            </Box>
        </>
      )
}

export default Home