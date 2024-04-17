"use client"
import React,{useEffect, useState} from 'react'
import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Footer from "@/Components/Footer"
import axios from 'axios'
import { Container } from '@mui/material'
import Card from "@/Components/Card"

export default function page() {
  const [tour, settour] = useState([])

  useEffect(() => {
    const getData = async () =>{
      try {      
        // console.log("image lelo le baba")
        const response = await axios.get("/api/tour/tourget") // promise need async and await
        // console.log(response.data.getalllisting)
        const data = response.data.getalllisting
        settour(data as any)
      } catch (error) {
        console.log("Error :", error)
      }
    }
    getData();
  },[])

  return(
  <>
  <Navbar/>
  <Hero/>
  <Container sx={{marginTop: '2rem',display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {tour.map((item:any, index:any)=>{
        return <Card key={index} data={item}/>
    })}
  </Container>
  <Footer/>
  </>
)
}



