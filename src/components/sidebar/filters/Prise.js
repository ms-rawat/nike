import React from 'react'
import icon from './icon.svg'



function Prise() {
  return (
    <div className='d-flex flex-column'>
    <div className='fw-bold ms-3 mb-3 d-flex fle-row justify-content-between'>
        <div>Prize</div>
        <div><img src={icon} alt=".." /></div>
    </div>
    <div className="form-check ms-3"  >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label  className="form-check-label fw-semibold" for="flexCheckDefault">
            uder  ₹ 2500
            </label>
    </div>
    <div className="ms-3 form-check"  >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label  className="form-check-label fw-semibold" for="flexCheckDefault">
            ₹ 2500- ₹ 3000
            </label>
    </div>
    <div className="form-check ms-3"  >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label  className="form-check-label fw-semibold" for="flexCheckDefault">
            ₹ 3000- ₹ 4000
            </label>
    </div>
    <div className="form-check ms-3"  >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label  className="form-check-label fw-semibold" for="flexCheckDefault">
            ₹ 4000- ₹ 5000
            </label>
    </div>

<hr className='mx-4'/>

</div>
  )
}

export default Prise