import React from 'react'
import ProductItem from './ProductItem'
import products from '../data/products.json';
import _ from 'lodash';

function ProductList() {
  return (
    <div className='product-list' style={{flexDirection:'column'}}>
        {
          _.map(products.data, (item, index) => {
            return (
              <ProductItem
                  id={index}
                  name={item.name}
                  isSale={item.isSale}
                  price={item.price}
                  thumbnail={item.thumbnail}
              />      
            )
          })    
        }
    </div>
  )
}

export default ProductList