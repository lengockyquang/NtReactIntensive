import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
  return (
    <div className='product-list'>
        <ProductItem
            id={1}
            name="A300 ULTIMA PATROL"
            isSale={false}
            price={150.00}
            thumbnail="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/patrolTigerStripe.png"
        />
        <ProductItem
            id={2}
            name="92XI"
            isSale={true}
            price={220.00}
            thumbnail="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/92xi.png"
        />
        <ProductItem
            id={3}
            name="80X CHEETAH"
            isSale={true}
            price={180.00}
            thumbnail="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/80x.png"
        />
    </div>
  )
}

export default ProductList