"use client"
import { useParams } from 'next/navigation'
import React from 'react'



const SpecialilyPage = () => {

    const { specialty} = useParams();


    return <div>SpecialityPage : { specialty}</div>
  
}

export default SpecialilyPage

