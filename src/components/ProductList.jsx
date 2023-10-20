import React, {useEffect, useState} from 'react'
import ProductItem from './ProductItem'
import _ from 'lodash';

function ProductList(props) {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const dataByPages = [];
    console.log(props.products);
    for (let index = 0; index < props.products.length; index += 4) {
        dataByPages.push(props.products.slice(index, index + 4));
    }
    setData(dataByPages);
  },[]);


  return (
    <section className='py-5'>
        <div className="container px-4 px-lg-5 mt-5">
            {
              _.map(data, (productByRow, rowIndex)=>{
                return (
                  <div className="row gx-4 gx-lg-5 row-cols-sm-3 row-cols-md-3 row-cols-xl-4" key={rowIndex}>
                      {
                        _.map(productByRow, (product, index)=>{
                          return (
                            <ProductItem
                              id={"PL"+(index+1)}
                              key={`product-${index}`}
                              name={product.name}
                              isSale={product.isSale}
                              price={product.price}
                              thumbnail={product.thumbnail}
                          />
                          )
                        })
                      }
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default ProductList