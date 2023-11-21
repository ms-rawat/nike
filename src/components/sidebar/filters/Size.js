import React from 'react'
import icon from './icon.svg'

import './sidebar.css'
function Size() {
  return (
    <div className='d-flex flex-column'>
        <div className="ms-4 fw-bold mb-3  d-flex flex-row justify-content-between">
          <div>Size</div>
          <div><img src={icon} alt=".." /></div>
        </div>
        
        <div className='d-flex flex-row flex-wrap gap-2 ms-4'>
           <button>1.5</button>
           <button>2</button>
           <button>3.5</button>
           <button>4</button>
           <button>4.5</button>
           <button>5</button>
           <button>6(EU 39)</button>
           <button>6(EU 40)</button>


        </div>
         

    </div>
  )
}

export default Size