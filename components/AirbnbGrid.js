import React from 'react'
import AirbnbCard from '@/components/AirbnbCard'

function AirbnbGrid({roomInfo}) {
  // console.log("roomInfo in CardGrid:" , roomInfo)
  // console.log("roomInfo.message in CardGrid:" , roomInfo.message)
  const items = roomInfo?.message?.results;
  // console.log("items:" , items);
  return (
    <div className="grid grid-cols-5 gap-5">
      {items && items.map((item) => {
        return <AirbnbCard roomInfo={item} />;
      })}
    </div>
  )
}

export default AirbnbGrid