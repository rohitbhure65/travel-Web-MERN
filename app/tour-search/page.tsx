"use client"
import React,{useEffect, useState} from 'react'
import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Footer from "@/Components/Footer"
import axios from 'axios'
export default function page() {
  const [tour, settour] = useState([])

  useEffect(() => {
    const getData = async () =>{
      try {      
        // console.log("image lelo le baba")
        const response = await axios.get("/api/tour/tourpopular") // promise need async and await
        // console.log(response.data.getalllisting)
        const data = response.data.getalllisting
        settour(data as any)
      } catch (error) {
        console.log("Error :", error)
      }
    }
    getData();
  },[])
  return (
    <>
    <Navbar/>
        <Hero/>
              <section className="w-full">
      
              </section>
        <Footer/>
    </>
  )
}
