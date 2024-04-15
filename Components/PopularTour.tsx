"use client"
import React,{useEffect, useState} from 'react'
import Card from '@/Components/Card'
import { Typography,Container } from '@mui/material';
import axios from "axios";

function PopularTour(){

  const [tour, settour] = useState([])

  useEffect(() => {
    const getData = async () =>{
      try {      
        // console.log("image lelo le baba")
        const response = await axios.get("/api/tour/tourpopular") // promise need async and await
        // console.log(response.data.getalllisting)
        const data = response.data.getalllisting
        settour(data as any)
        // console.log(Images);
      } catch (error) {
        console.log("Error :", error)
      }
    }
    getData();
  },[])
  

  return (
    <>
    <Typography variant='h3' sx={{
      py: '2rem', 
      textAlign: 'center',
      fontWeight: 800
    }}>Popular Tour</Typography>
    <Container sx={{marginTop: '2rem',display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
      {tour.map((item:any, index:any)=>{
          return <Card key={index} data={item}/>
      })}
    </Container>
    </>
  )
}

export default PopularTour
