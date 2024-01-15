import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { register } from 'swiper/element/bundle';
import { remoteImg } from './data/about';
register
const About = () => {
  return (
    <>
      <Box id="About" component='div' sx={{px:{xs:0,md:3,lg:20},py:{xs:2,md:15}}} >
                <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                    <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <PersonIcon/> ABOUT</Typography>
                </Box>
                <Box className="mb-3 mb-md-5 ">
                <Typography className='mb-3 mb-md-5 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                Every great design begin with an even <span style={{ color: '#28E98C' }}>better story</span></Typography>
                <Typography variant="body1" color="#aaa">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</Typography>
                </Box>
                <Box sx={{ width: { md: "25%", xs: "100%" } }}>
                <swiper-container effect="cards" autoplay="true">
                {remoteImg.map((data,i)=>(
                    <swiper-slide key={i}>
                        <CardMedia
                            component='img'
                            sx={{
                              borderRadius:'10px',
                              height: { md: '200px', xs: "250px" },
                              margin: "auto", // Center the image horizontally
                              display: "block", // Ensure the image behaves as a block element
                            }}
                            image={data.img}
                          />
                    </swiper-slide>
                ))}
            </swiper-container>
                </Box>
            </Box>
    </>
  )
}

export default About