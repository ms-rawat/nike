import React from 'react'
import icon from './icon.svg'
function SalesOffer() {
  return (
    <div className='d-flex flex-column'>
        <div className='fw-bold ms-4  mb-3 d-flex flex-row justify-content-between'>
           <div> Sale & Offer</div>
           <div><img src={icon} alt=".." /></div>
        </div>
        <div className="form-check ms-3"  >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label  className="form-check-label fw-semibold" for="flexCheckDefault">
           sale
            </label>
    </div>
   
    <hr className='mx-4' />

    </div>

    
  )
}

export default SalesOffer