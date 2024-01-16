import { Box, Typography } from '@mui/material'
import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RepeatIcon from '@mui/icons-material/Repeat';
const Resume = () => {
  return (
    <>
      <Box id="Resume" component='div' sx={{px:{xs:0,md:3,lg:20},py:{md:9,xs:5}}}>
                <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                    <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <BusinessCenterIcon/> RESUME</Typography>
                </Box>
                <Box className="mb-3 mb-md-5 ">
                <Typography data-aos="fade-right" className='mb-3 mb-md-5 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                Education & <span style={{ color: '#28E98C' }}>Experience</span></Typography>
                <Typography data-aos="fade-up" variant="body1" color="#aaa">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</Typography>
                </Box>
                <Box>
                <Timeline position="alternate" data-aos="flip-up">
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        // color="white"
                        >
                        2024 - 2026
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="success" variant="outlined" >
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Aptect
                        </Typography>
                        <Typography>IT Software</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        
                        >
                        2020 - 2021 
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="success">
                            <MenuBookIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            intermidate
                        </Typography>
                        <Typography>Buffer zone  Degree Collage!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="success" variant="outlined">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            code
                        </Typography>
                        <Typography>1 year + in programming </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                        <TimelineDot color="success">
                            <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Other
                        </Typography>
                        <Typography>Serach Engine Optimization</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                </Box>
            </Box>
    </>
  )
}

export default Resume