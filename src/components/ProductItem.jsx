import React from 'react'
import { setItem } from '../redux/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductItem(props) {
  const defaultThumbnail = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setItem({
      id: props.id,
      name: props.name,
      price: props.price 
    }))
  }


  return (
    <div className="col-3 col mb-5 product-item">
      <div className="card h-100">
        {
          props.isSale && (
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
          )
        }
        <div style={{padding: 10}}>
          <img style={{background: '#f2f2f2'}} className="card-img-top" src={props.thumbnail ? props.thumbnail : defaultThumbnail} alt="..." />
        </div>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.name}</h5>
            {`$${props.price}` ?? "$0.00"}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem