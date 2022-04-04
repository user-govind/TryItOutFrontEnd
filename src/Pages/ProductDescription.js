import React from 'react'
import Displaycard from '../components/Displaycard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OneProduct from '../components/OneProduct'
import { useState } from 'react'

export default function ProductDescription() {
  
  return (
    <div>
    <Navbar></Navbar>
    <OneProduct></OneProduct>
    <Displaycard ></Displaycard>
    <Footer></Footer>
    </div>
  )
}
