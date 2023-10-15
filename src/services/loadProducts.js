import productData from '../data/products.json';

// please reimplement these methods if u guys want to fetch data from other resources.

export const loadProducts = () =>{
    return new Promise((resolve, reject)=>{
        resolve(productData.data);
    });
}