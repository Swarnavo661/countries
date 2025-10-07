import React from 'react'

import './CountriesShimmer.css'

export default function CountriesShimmer() {

    // we can create a shimmer effect in React these two way, 
    // i) const array = new Array(10).fill('')
    // console.log(array);

    // ii) const array = Array.from({length:10})
    // console.log(array);

    // Array.from({length: 5}).fill('')

    // we can create an simmer effect like this way 
    // const shimmerArray = Array.from({length:10}).map((el, i) => 
    // {
    //     // console.log(el);
    //     return <div key={i} className='country-card shimmer-card'></div>
    // })
    
    // console.log(shimmerArray);

  return (
    <div className='country-container'>
        {/* <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div>
        <div className='country-card shimmer-card'></div> */}
        {
            Array.from({length:250}).map((el, i) => 
            {
                // console.log(el);
                return (
                  <div key={i} className='country-card shimmer-card'>
                    <div className="flags-container"></div>
                    <div className="card-text">
                      <h2 className="card-title"></h2>
                      <p></p>
                      <p></p>
                      <p></p>
                    </div>
                  </div>    
              )
            })
        }
    </div>
  )
}
