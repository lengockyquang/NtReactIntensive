import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import _ from 'lodash';
import Loading from './Loading';

function ProductList(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      const dataByPages = [];
      for (let index = 0; index < props.products.length; index += 4) {
        dataByPages.push(props.products.slice(index, index + 4));
      }
      setLoading(false);
      setData(dataByPages);
    }, 500)
  }, []);


  const renderNormalList = () => {
    return (
      <div className="container px-4 px-lg-5 mt-5">
        {
          _.map(data, (productByRow, rowIndex) => {
            return (
              <div className="row gx-4 gx-lg-5 row-cols-sm-3 row-cols-md-3 row-cols-xl-4" key={rowIndex}>
                {
                  _.map(productByRow, (product, index) => {
                    return (
                      <ProductItem
                        id={"PL" + (index + 1)}
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

    );
  }

  if(loading)
  {
    return  <Loading text="Loading" loading={loading}/>
  }

  return (
    <section className='py-5'>
      {renderNormalList()}
    </section>
  )
}

export default ProductList