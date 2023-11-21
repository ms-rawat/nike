import React from 'react'
import './product.css'
function ProductCard({data}) {
  return (
    <div className='card' style={{'border':'0', 'border-radius':'0'}}>
      
        <img className="card-img-top " style={{'border-radius':0}}  src={data.img_link} alt="shoe.." />
        
        <div className="card-body">
            <p className='fw-semibold' style={{margin:0}}>{data.name}</p>
            <p className='card-text'  style={{'margin':'0','color': '#707072'}}>{data.color}</p>
            <p className='card-text' style={{'margin':'0','color': '#707072'}}>{data.type}</p>
            <p className='fw-semibold' style={{'margin':'0', 'margin-top':'8px'}}>MRP : {data.MRP}</p>
        </div>
       


    </div>
  )
}

export default ProductCard