import { Box, Typography } from '@mui/material'
import React from 'react'
import PsychologyIcon from '@mui/icons-material/Psychology';
import { skill } from './data/skill';
const Skills = () => {
  return (
    <>
        <Box id="Skills" component='div' sx={{px:{xs:0,md:3,lg:20},py:{md:7,xs:5}}} >
            <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <PsychologyIcon/> SKILLS</Typography>
            </Box>
            <Box className="mb-3  ">
                <Typography className='mb-3  ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                My <span style={{ color: '#28E98C' }}>Skills</span></Typography>
            </Box>
            <Box className='d-flex flex-wrap '>
            {skill.map((data, i) => (
                <Box component="div" mr={3.5} my={3}   >
                    <Box className=" rounded-pill custom-service-box" sx={{py:{xs:3,md:7},px:{xs:1,md:3}}} >
                    <ion-icon
                    name={`logo-${data.name}`}
                    className="text-bg-success "
                    style={{ color: 'white', fontSize: '4rem' }}
                    ></ion-icon>                        
                    <Typography variant="body1" sx={{ fontSize: { xs: '2rem' },color:"#28E98C",textAlign:'center' }}>{data.percentage} %</Typography>
                    </Box>
                    <Typography variant="body1" color="white" sx={{textAlign:'center',textTransform:'capitalize',mt:'1rem'}}>{data.name}</Typography>
                </Box>
                ))}
            </Box>
        </Box>
    </>
  )
}

export default Skills