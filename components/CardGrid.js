import React from 'react'
import AirbnbCard from '@/components/AirbnbCard'

function CardGrid({roomInfo}) {
  console.log("roomInfo in CardGrid:" + roomInfo)
  return (
    <div className="grid grid-cols-5 gap-5">
      <AirbnbCard roomInfo={roomInfo}/>
      <AirbnbCard roomInfo={roomInfo}/>
      <AirbnbCard roomInfo={roomInfo}/>
      <AirbnbCard roomInfo={roomInfo}/>
      <AirbnbCard roomInfo={roomInfo}/>
      <AirbnbCard roomInfo={roomInfo}/>
    </div>
  )
}

export default CardGrid