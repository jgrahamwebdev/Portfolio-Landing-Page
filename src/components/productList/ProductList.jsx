
//import React from 'react'
import './productList.css';
import Product from '../product/Product';
import {products} from '../../data';

function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa, illo atque sapiente inventore eius?</p>
      </div>
      <div className="pl-list">
        {products.map(function (item) {
          return <Product key={item.id} img={item.img}/>
        })}
      </div>
    </div>
  )
}

export default ProductList

