import React from 'react'

import './CountryDetailsShimmer.css'

export default function CountryDetailsShimmer() {
  return (
    <div className='country-details-container'>
      <div className="country-details">
      { 
          Array.from({length:1}).map((el, i) => 
          {
            // return <img key={i} className='detailsImage shimmer-image'/>
            return <div key={i} className='detailsImage shimmer-image'></div>
          })
      }
      <div className='details-text'>
        { 
          Array.from({length:1}).map((el, i) => 
          {
            // return <img key={i} className='detailsImage shimmer-image'/>
            return <h1 key={i} className="shimmer-heading"></h1>
          })
      }
      {
        Array.from({length:1}).map((el, i) => 
        {

          return <div key={i} className='details-text shimmer-Text'></div>
        })
      }
      </div>
      
      </div>
    </div>
    
  )
}
