import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import { Avatar, Box, Typography } from '@mui/material';
import { register } from 'swiper/element/bundle';
import { slideTestimonial } from './data/testimonial.jsx';
register();
const Testimonial = () => {
  return (
    <>
        <Box id='Testimonial' component='div' sx={{px:{xs:0,md:3,lg:20},py:{md:18,xs:5}}}>
            <Box className="px-3 py-1 mb-5 border border-1 rounded-5 d-inline-block">
                    <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <MessageIcon/> TESTIMONIAL</Typography>
            </Box>
            <Box className="mb-5 ">
                <Typography data-aos="fade-right" className='mb-3 mb-md-5 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                Trusted by <span style={{ color: '#28E98C' }}> Hundered Clients</span></Typography>
            </Box>
            <swiper-container effect="coverflow" slideShow="true">
                {slideTestimonial.map((data,i)=>(
                    <swiper-slide key={i}>
                        <Box className="border border-2  rounded-5 " px={6} py={5}>
                            <Box className="d-flex flex-row   mb-3 " >
                                <Avatar alt="Remy Sharp" src={data.img} sx={{mr:1}} />
                                <Box component="div" >
                                    <Typography data-aos="fade-right" variant="body1" color="white"  sx={{ fontSize: {xs: '1rem' } }}  > {data.name} </Typography>
                                    <Typography data-aos="fade-left" variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > {data.des} <span style={{ color: '#28E98C' }}>{data.impDes} </span> </Typography>
                                </Box>
                            </Box>
                            <Typography data-aos="fade-up" variant="h6" color="white" className='mb-5'>
                                {data.msg}
                            </Typography>
                            <span style={{ color: 'white',textTransform:'uppercase' }}> Project</span>
                        </Box>
                    </swiper-slide>
                ))}
               
                
            </swiper-container>
            
        </Box>
    </>
  )
}

export default Testimonial