import React from 'react'
import MarketplaceCard from '@/components/MarketplaceCard'

function MarketplaceGrid({ trips }) {
  console.log("trips in MarketplaceGrid:" , trips)
  console.log("trips[2] in MarketplaceGrid:" , trips[2])

  const items = trips;
  console.log("items:", items);

  if (!items) {
    return <div></div>
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {items && items.map((item) => {
        return <MarketplaceCard trips={item} />;
      })}
    </div>
  )
}

export default MarketplaceGrid