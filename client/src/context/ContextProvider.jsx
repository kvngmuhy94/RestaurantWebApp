import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

const StateContext = createContext();

const initialState = {
  showCart: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

  const bar = useRef();
  //client context
  const cartFromSession = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
  const totalFromSession = (sessionStorage.getItem('totalQty') || 0 );
  const totalPriceFromSession = (sessionStorage.getItem('totalPrice') || 0 );
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(cartFromSession);
  const [totalPrice, setTotalPrice] = useState(totalPriceFromSession);
  const [totalQuantities, setTotalQuantities] = useState(totalFromSession);
  const [qty, setQty] = useState(1);
  const [userProfile, setUserProfile] = useState(initialState);
  const [companyId, setCompanyId] = useState('')
  const [auth, setAuth] = useState(localStorage.getItem('auth'))

  let foundProduct;
  let index;
  const setAuthFunc = (param)=>{
    localStorage.setItem('auth', param)
    setAuth(localStorage.getItem('auth'))
  } 
  
  
    
  



 const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    // setTotalQuantities(sessionStorage.setItem("totalQty", (prevTotalQuantities) => prevTotalQuantities + quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
   
    // setTotalQuantities(cartItems.length)
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct.id === product.id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
 } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id)
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }


  //Company context
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#002984');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [orders, setOrders] = useState(5);
  const [asCompany, setAsCompany] = useState(false);
  

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider 
      value={{
        bar, 
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        currentColor, 
        currentMode, 
        activeMenu, 
        screenSize,
        setScreenSize, 
        handleClick, 
        isClicked, 
        initialState, 
        setIsClicked, 
        setActiveMenu, 
        themeSettings, 
        setThemeSettings,
        userProfile,
        setUserProfile,
        companyId,
        setCompanyId,
        toggleCartItemQuantity,
        onAdd,
        onRemove,
        setAuthFunc,
        orders,
        setOrders,
        asCompany,
        setAsCompany,
        auth,
        setAuth
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
