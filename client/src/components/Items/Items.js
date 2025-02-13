import React from 'react'
import { dummyProducts } from '../../dummyProducts'
import Card from '../Card/Card'

function Items() {
  return (
    <div className='flex'>
      {dummyProducts.map((product, index) => (
        <div key={index}>
          <Card cardInfo={product}/>
        </div>
      ))}
    </div>
  )
}

export default Items