import React from 'react'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/shoppingCartSlice';
import { identitySelector, shoppingCartSelector } from '../redux/selector';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login';
import ApplicationModal from './ApplicationModal';
import Cart from './Cart';
import ProductList from './ProductList';

function NavBar() {
  const identityInfo = useSelector(identitySelector);
  const shoppingCart = useSelector(shoppingCartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartModalRef = useRef(null);

  useEffect(() => {
    loadCartItemsFromLocalStorage();
  }, [])

  const loadCartItemsFromLocalStorage = () => {
    let localStorageCartItems = localStorage.getItem("cartItems");
    if (localStorageCartItems) {
      dispatch(refresh(JSON.parse(localStorageCartItems).data));
    }
  }

  const onOpenCartModal = () => {
    cartModalRef.current.onOpen();
  }

  return (
    <div className='shop-navbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Intensive</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#" onClick={() => navigate("/")}>Home</a>
            <a className="nav-item nav-link" href="#" onClick={() => navigate("/shop")}>Shop</a>
            <a className="nav-item nav-link" href="#" onClick={() => navigate("/")}>About</a>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
          <ul className="navbar-nav ml-auto">
            {
              identityInfo.isAuthenticated ? (
                <React.Fragment>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={onOpenCartModal} >Cart({shoppingCart.cartItems.length})</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Hello {identityInfo.userName}</a>
                  </li>
                </React.Fragment>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate("/login")}>Login</a>
                </li>
              )
            }

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ApplicationModal
        key={"cartModal"}
        ref={cartModalRef}
        title='Checkout'
        content={<Cart />}
        maskClosable={false}
        width={1000}
      />
    </div>
  )
}

export default NavBar