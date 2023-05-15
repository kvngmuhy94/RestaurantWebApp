import React, { useContext, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
//import toast from 'react-hot-toast';

import { useStateContext } from '../context/ContextProvider';


import { DeleteOutline, Remove, Add, ArrowBackIos, ShoppingCartOutlined } from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

const Cart = ({productCount}) => {
  const navigate = useNavigate()
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const cart = useContext(CartContext)
  
  const handleCheckout = () =>{
    navigate('/checkout')
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
          <span className="cart-num-items">({productCount} items)</span>
        </button>

        {productCount < 0 
        
          ?
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
          :
          <div className='flex flex-col items-center p-2'>
            <h2 className='text-red-500 font-bold text-xl uppercase'>Items in your cart</h2>
            {
              cart.items.map((currentProduct, index) => (
                <div className="product" key={currentProduct.id}>
                
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{currentProduct.id}</h5>
                    <h4># {currentProduct.price}</h4>
                  </div>
                  {/* <div className="flex bottom">
                    <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                      <Remove />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><Add /></span>
                    </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <DeleteOutline />
                    </button>
                  </div> */}
                </div>
              </div>
                // <h1>ProductId: {currentProduct.id}</h1>
              ))
            }

            {/* <h1>Total: {cart.getTotalCost().toFixed(2)}</h1> */}

            <div>
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        }

        {/* <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <Remove />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><Add /></span>
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
        </div> */}
        {/* {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Cart