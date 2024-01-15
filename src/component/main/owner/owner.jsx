import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import ownerPic from '../../../assets/images/owner.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Owner = ({gettoggleMenuBar}) => {
  const arr = [GitHubIcon,InstagramIcon,TwitterIcon,FacebookIcon]
  const [menuBar, setMenuBar] = useState(false);

  const toggleMenuBar = () => {
    setMenuBar((prevState) => !prevState);
    gettoggleMenuBar(!menuBar); 
   
  };
  return (
    <>
        <Box component='div' p={4}  className='border border-2 position-relative ' sx={{borderRadius:'20px'}}>
            <Box className="overflow-hidden mb-5">
              <Typography variant="h4" color="white" sx={{float:'left',fontWeight:'bold'}}>Hamza</Typography>
              <Typography variant="body1" color="white" sx={{float:'right'}}>Full Stack &nbsp; &nbsp; &nbsp;   & <br/> Website Developer</Typography>
            </Box>
            <Card className='mb-5' sx={{borderRadius:'20px',overflow:'hidden',border:'1px solid white'}}>
              <CardMedia
                component="img"
                alt="owner"
                height="300"
                image={ownerPic}
              />
            </Card>
            <Box className="mb-3">
              <Typography variant="h5" color="white" sx={{textAlign:'center',fontWeight:'thin'}} >Hi@hamza.developer <br/> Base in karachi</Typography>
              <Typography variant="body1" color="white" sx={{textAlign:'center',mt:4}} >© 2024 Hamza. All Rights Reserved</Typography>
            </Box>
              <Box className="mb-3 d-flex justify-content-center align-items-center ">
              {arr.map((Icon, i) => (
                <Box
                  key={i} 
                  component='div'
                  className='p-2 mx-1 border border-1 d-inline-block'
                  sx={{ borderRadius: '100%' }}
                >
                  <Icon />
                </Box>
              ))}
              </Box>
              <Box className="mb-3">
                <Button variant='contained' color='success' sx={{ width: '100%',borderRadius:'20px' }}>
                  HIRE Me!
                </Button>
              </Box>
              <Box className="menu" onClick={toggleMenuBar}>
                <MenuOpenIcon sx={{fontSize:'2rem'}}/>
              </Box>
              
        </Box>
    </>
  )
}

export default Owner