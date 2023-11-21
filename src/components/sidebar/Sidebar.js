import React from 'react'
import TypeOfShoe from './filters/TypeOfShoe'
import Gender from './filters/Gender'
import Prise from './filters/Prise'
import SalesOffer from './filters/SalesOffer'
import Size from './filters/Size'

function Sidebar() {
  return (
    <div className='position-fixed sidebar'>
      
        <TypeOfShoe/>
        <Gender/>
        <Prise/>
        <SalesOffer/>
        <Size/>
        

    </div>
  )
}

export default Sidebar