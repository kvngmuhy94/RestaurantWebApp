import React, { useContext, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
//import toast from 'react-hot-toast';

import { useStateContext } from '../../context/ContextProvider';


import { DeleteOutline, Remove, Add, ArrowBackIos, ShoppingCartOutlined } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import {PaypalCheckoutButton} from '../';

const Cart = ({productCount}) => {
  const navigate = useNavigate()
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  
  const products = {
    description: "zealot headset",
    price: 200
  }
  
  const handleCheckout = () =>{
    navigate('success')
    // alert("bought")
  }
  return (
    <div className="cart-wrapper z-100" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <ArrowBackIos />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length  < 1 && (
          <div className="empty-cart">
            <ShoppingCartOutlined size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="bg-primary w-100 max-w-lg py-2 px-10 rounded-md text-white font-lg mt-10 cursor-pointer uppercase hover:text-blue-600 hover:bg-slate-200"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )
        }

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="product" key={item.id}>
              <img src={item?.image1} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item?.name}</h5>
                  <h4>${item?.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuantity(item?.id, 'dec') }>
                    <Remove />
                    </span>
                    <span className="num" onClick="">{item?.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuantity(item?.id, 'inc') }><Add /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <DeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <div className='flex items-center m-auto w-full'>
                
                <button
                  className='bg-yellow-600 font-bold text-slate-200 px-5 py-2 shadow-sm hover:scale-110 hover:shadow-xl transition-all'
                  type='button' onClick={() => navigate('/success')}>Buy Now</button>
              </div>
              <PaypalCheckoutButton products={products} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart