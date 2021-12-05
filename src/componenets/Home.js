import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material/';
import GoogleIcon from '@mui/icons-material/Google';

import { signInWithGoogle } from '../database/useDB';

const Home = () => {
   return (
      <Container maxWidth="lg" sx={{
         minHeight: '100vh',
         display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
         <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
            mb: '2rem;'
         }}>
            <TextField id="outlined-basic" label="Username / Email" variant="outlined" sx={{mb: '1rem'}}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{mb: '1rem'}} />
            <Button variant="outlined">Sign In</Button>
         </Box>
         <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
         }}>
            <Typography variant="h5" component="h5" sx={{textAlign: 'center'}}>
               No Account? <br/> Sign in with Google!
            </Typography>
            <Button variant="outlined" onClick={signInWithGoogle}>
               <GoogleIcon />
            </Button>
         </Box>

      </Container>
   )
}

export default Home;