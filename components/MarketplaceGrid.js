import React from 'react'
import MarketplaceCard from '@/components/MarketplaceCard'

function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-3 gap-5">
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
    </div>
  )
}

export default MarketplaceGrid