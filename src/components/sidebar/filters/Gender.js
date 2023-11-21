import React from 'react'
import icon from './icon.svg'
function Gender() {
    return (
        <div className='d-flex flex-column'>
            <div className='fw-bold ms-3 mb-3 d-flex flex-row justify-content-between'>
                <div>Gender</div>
                <div><img src={icon} alt=".." /></div>
            </div>
            <div className="form-check ms-3"  >
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label  className="form-check-label fw-semibold" for="flexCheckDefault">
                    Man
                    </label>
            </div>
            <div className="ms-3 form-check"  >
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label  className="form-check-label fw-semibold" for="flexCheckDefault">
                   WoMan
                    </label>
            </div>
            <div className="form-check ms-3"  >
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label  className="form-check-label fw-semibold" for="flexCheckDefault">
                    Unisex
                    </label>
            </div>

 <hr className='mx-4' />

        </div>
    )
}

export default Gender