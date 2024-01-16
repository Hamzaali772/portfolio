import React from 'react'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { Box, Typography } from '@mui/material';
import { service } from './data/service';
const Service = () => {
  return (
    <>
        <Box id="Service" component='div' sx={{px:{xs:0,md:3,lg:20},py:{md:7,xs:5}}}>
            <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                    <Typography  variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <SettingsAccessibilityIcon/> SERVICE</Typography>
            </Box>
            <Box className="mb-3 mb-md-4 ">
                <Typography data-aos="fade-right" className='mb-3 mb-md-5 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                My <span style={{ color: '#28E98C' }}>Specializations</span></Typography>
            </Box>
            <Box>
            {service.map((data, i) => (
                <Box data-aos="fade-up"  data-aos-duration={data.dur} component='div' className="custom-service-box  rounded-5 px-5 py-4 mb-3" key={i}>
                    <Box>
                    <Box  className="d-flex justify-content-center align-items-center">
                        <Typography variant="h4" color="white" sx={{ flexGrow: 1 }} className='my-2'>{data.title}</Typography>
                        <ion-icon name={data.icon} className="text-bg-success" style={{ color: '#28E98C', fontSize: '2rem' }}></ion-icon>
                    </Box>
                    </Box>
                    <Typography variant="body1" color="#aaa" className='mb-3'>{data.pargraph}</Typography>
                    <span className="text-secondary">{data.span} project</span>
                </Box>
            ))}

            </Box>
        </Box>
    </>
  )
}

export default Service