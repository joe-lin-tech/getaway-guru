import React, { useEffect } from 'react'
import MarketplaceGrid from '@/components/MarketplaceGrid'
import Searchbar from '@/components/Searchbar'
import Modal from '@/components/Modal'
import { useState, Fragment } from "react"
import Navigation from '@/components/navigation'



const Marketplace = () => {
  
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        console.log("hi2");
        getTrips(setTrips);
        console.log(trips);
    }, [])
    console.log(trips);
      
  return (
    <>
    <Navigation />
      <div className="absolute bg-gray-200"
      aria-hidden="true">
        
      <div className="text-center pt-8 pb-8 text-3xl font-normal text-black font-mono">
            <h1>Marketplace</h1>
        </div>
        <div className="flex items-center justify-center pb-8">
            <Searchbar />
        </div>
        <div className="pl-4 pr-4">
            <MarketplaceGrid trips={trips}/>
        </div>
        </div>
    </>
  )
}

const getTrips = async (setTrips) =>{
    console.log("hi");
    await fetch(`http://localhost:3000/api/trips/allTrips`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const result = await res.json();
        console.log(result + "from result");
        setTrips(result)
      }).catch((err) => {
        console.log(err);
      })
}

export default Marketplace