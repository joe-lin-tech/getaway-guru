import React from 'react'
import MarketplaceGrid from '@/components/MarketplaceGrid'
import Searchbar from '@/components/Searchbar'

function marketplace() {
  return (
    <div>
        <div className="text-center pt-8 pb-8">
            <h1>Marketplace</h1>
        </div>
        <div className="flex items-center justify-center pb-8">
            <Searchbar />
        </div>
        <div className="pl-4 pr-4">
            <MarketplaceGrid />
        </div>
    </div>
  )
}

export default marketplace