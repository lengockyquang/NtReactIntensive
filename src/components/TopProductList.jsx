import React from 'react'
import ProductItem from './ProductItem'
import topProducts from '../data/top-products.json';
import _ from 'lodash';

function TopProductList() {
    return (
        <div className='product-list top-product-list'>
            {
                _.map(topProducts.data, (item, index)=>{
                    return (
                        <ProductItem
                            id={item.id}
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

export default TopProductList