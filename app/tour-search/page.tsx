"use client"
import React from 'react'
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Footer  from "@/Components/Footer";
import Filter from "@/Components/Filter"

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Filter/>
    <Footer/>
    </>
  )
}

export default page
