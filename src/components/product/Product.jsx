
//import React from 'react'
import './product.css';

function Product({img}) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle r"></div>
        <div className="p-circle y"></div>
        <div className="p-circle g"></div>
      </div>
      <span>
        <img src={img} alt="" className='p-img'/>
      </span>
    </div>
  )
}

export default Product

