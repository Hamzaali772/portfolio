import { Box, Button, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    const theme = createTheme({
        components: {
          MuiTextField: {
            styleOverrides: {
            root: {
                '& .MuiInputLabel-root': {
                  color: 'white', 
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', 
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green', 
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#28E98C', 
                },
              },
            },
          },
        },
      });
  return (  
    <>
        <Box id="Contact" component='div' sx={{px:{xs:0,md:3,lg:20}}} pt={10}>
            <Box className="px-3 py-1 mb-3 mb-md-5 border border-1 rounded-5 d-inline-block">
                    <Typography variant="body1" color="white"  sx={{ fontSize: {xs: '12px' } }}  > <MonetizationOnIcon/> CONTACT</Typography>
            </Box>
            <Box className="mb-3 mb-md-5 ">
                <Typography data-aos="fade-right" className='mb-3 mb-md-4 ' variant="h3" color="white" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem',lg:'2.7rem' } }}>
                Let's Work <span style={{ color: '#28E98C' }}> Together!</span></Typography>
                <Typography variant="h6" color="white">Hi@hamza.developer</Typography>
                <Box component="form" noValidate >
                    <Grid container  my={7}>
                        <Grid item  xs={12} md={5}>
                            <ThemeProvider  theme={theme}>
                                <TextField data-aos="fade-right"  label="Name" variant="outlined" color="success" fullWidth margin='dense'  />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <ThemeProvider  theme={theme}>
                                <TextField  data-aos="fade-left"  label="Email" variant="outlined" color="success" fullWidth margin="dense" />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} md={5}>
                        <ThemeProvider  theme={theme}>
                            <TextField  data-aos="fade-right"  label="Phone" variant="outlined" color="success" fullWidth margin='dense' />
                        </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} md={7}>
                        <ThemeProvider  theme={theme}>
                            <TextField  data-aos="fade-left" label="Subject" variant="outlined" color="success" fullWidth margin='dense' />
                            </ThemeProvider >
                        </Grid>
                        <Grid item xs={12} >
                        <ThemeProvider  theme={theme}>
                            <TextField  data-aos="fade-up" label="Budget" type='number' variant="outlined" color="success" fullWidth margin='dense' />
                        </ThemeProvider >
                        </Grid>
                        <Grid item xs={12} my={1}>
                        <textarea data-aos="fade-up"  name="message" id="message" placeholder="Wrire your message here ..."></textarea>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="success" sx={{borderRadius:'20px',px:2,py:1}} endIcon={<SendIcon />}>send Message</Button>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Contact