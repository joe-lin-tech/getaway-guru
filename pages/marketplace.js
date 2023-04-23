import React from 'react'
import MarketplaceGrid from '@/components/MarketplaceGrid'
import Searchbar from '@/components/Searchbar'
import Modal from '@/components/Modal'
import { useState, useEffect, Fragment } from "react"



const Marketplace = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        console.log("hi2");
        getTrips(setTrips);
    },[])
    console.log(trips);

      
  return (
    <div>
        <div className="text-center pt-8 pb-8">
            <h1>Marketplace</h1>
        </div>
        <div className="flex items-center justify-center pb-8">
            <Searchbar />
        </div>
        <div className="pl-4 pr-4">
            <MarketplaceGrid trips={trips}/>
        </div>
        
        <div>
            <Modal />
        </div>
  
    </div>
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