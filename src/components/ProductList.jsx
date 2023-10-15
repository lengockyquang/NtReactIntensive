import React, {useEffect, useState} from 'react'
import ProductItem from './ProductItem'
import _ from 'lodash';
import { loadProducts } from '../services/loadProducts';

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    loadProducts().then(response =>{
      setData(response);
    });
  });
  return (
    <div className='product-list' style={{flexDirection:'column'}}>
        {
          _.map(data, (item, index) => {
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