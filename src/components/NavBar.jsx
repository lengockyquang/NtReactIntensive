import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/shoppingCartSlice';
import { identitySelector, shoppingCartSelector } from '../redux/selector';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login';
import ApplicationModal from './ApplicationModal';
import Cart from './Cart';
import { Button } from 'react-bootstrap';

function NavBar() {
  const identityInfo = useSelector(identitySelector);
  const shoppingCart = useSelector(shoppingCartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(shoppingCart.cartItems);
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
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#" onClick={() => navigate("/")}>Shop</a>
            <a className="nav-item nav-link" href="#" onClick={() => navigate("/")}>About</a>
          </div>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
          <ul class="navbar-nav ml-auto">
            {
              identityInfo.isAuthenticated ? (
                <React.Fragment>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick={onOpenCartModal} >Cart({shoppingCart.cartItems.length})</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Hello {identityInfo.userName}</a>
                  </li>
                </React.Fragment>
              ) : (
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={() => navigate("/login")}>Login</a>
                </li>
              )
            }

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ApplicationModal
        ref={cartModalRef}
        title='Your cart items'
        content={<Cart />}
        maskClosable={false}
      />
    </div>
  )
}

export default NavBar