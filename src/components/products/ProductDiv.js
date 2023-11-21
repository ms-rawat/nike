import React from 'react';
import ProductCard from './ProductCard';
import data from './data';

console.log(data);

function Product_div() {
  return (
    <div className='ProductSide d-flex flex-row flex-wrap gap-2 flex-grow-1'>
      {data.map((productData) => (
        <ProductCard key={productData.id} data={productData} className="flex-grow-1" />
      ))}
    </div>
  );
}

export default Product_div;
