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
import { Dropdown } from 'antd';
import { logout } from '../redux/identitySlice';
import Profile from './Profile';
import About from './About';
import products from '../data/products.json';


function NavBar() {
  const identityInfo = useSelector(identitySelector);
  const shoppingCart = useSelector(shoppingCartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartModalRef = useRef(null);
  const profileModalRef = useRef(null);

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
    if(shoppingCart.cartItems.length === 0)
      return;
    cartModalRef.current.onOpen();
  }

  const onOpenProfile = () =>{
    profileModalRef.current?.onOpen();
  }

  const onLogout = () =>{
    dispatch(logout());
  }

  const items = [
    {
      key: '2',
      label: (
        <a href="#" onClick={onOpenProfile} style={{ textDecoration: 'none' }}>
          Profile
        </a>
      ),
    }
    ,{
      key: '1',
      label: (
        <a onClick={onLogout} href="#" style={{ textDecoration: 'none' }}>
          Logout
        </a>
      ),
    }
  ];
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
            <a className="nav-item nav-link" href="#" onClick={() => navigate("/about")}>About</a>
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
                    <Dropdown menu={{ items }} placement="bottomLeft">
                      <a className="nav-link" href="#">Hello {identityInfo.userName}</a>
                      {/* <Button>Hello {identityInfo.userName}</Button> */}
                    </Dropdown>
                    <a className="nav-link" href="#"></a>
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
        <Route path="/shop" element={<ProductList products={products.data} />} />
        <Route path="/about" element={<About />} />
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
      <ApplicationModal
        key={"profileModal"}
        ref={profileModalRef}
        title='Profile'
        content={<Profile />}
        maskClosable={false}
        width={1000}
      />
    </div>
  )
}

export default NavBar