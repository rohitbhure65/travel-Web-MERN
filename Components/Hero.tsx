"use client"
import React from 'react'
import { Typography,Box } from '@mui/material'
import Search from './Search'

const Hero = () => {
  return (
    <Box component="section" 
    sx={{
      backgroundImage: `url('./background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Typography variant='h2'
      sx={{maxWidth: 'auto',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '15rem',
      color: 'white',
      fontWeight: 600
      }}
      >Find Next Place To Visit</Typography>
      <Typography
       sx={{maxWidth: 'auto',
       display: 'flex',
       justifyContent: 'center',
        fontSize: 'simple',       
        paddingBottom: '5rem',
        color: 'white'
    }}
       >Discover amzaing places at exclusive deals</Typography>
  
      <Search/>

    </Box>
  )
}

export default Hero
