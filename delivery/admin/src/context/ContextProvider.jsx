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
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [userProfile, setUserProfile] = useState(initialState);
  const [companyId, setCompanyId] = useState('')
  const [isLogin, setIsLogin] = useState()
  const [auth, setAuth] = useState(sessionStorage.getItem('auth'))

  const role = ["buyer", "seller"];

  
  const setAuthFunc = ()=>{
    sessionStorage.setItem('auth', true)
    setAuth(sessionStorage.getItem('auth'))
  } 
  
  const checkAuth = () =>{
    if(!sessionStorage.getItem('auth'))
    {
      sessionStorage.setItem('auth', false)
    } 
    else {
      sessionStorage.setItem('auth', true)
    }
  }

    // useEffect(() => {
    //   const data = sessionStorage.getItem('company_Id')
    //   setCompanyId(data)
    //   console.log("the company id is: " + companyId)
    //   }, []);
    
  



 //const onAdd = (product, quantity) => {
    // const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    // if(checkProductInCart) {
    //   const updatedCartItems = cartItems.map((cartProduct) => {
    //     if(cartProduct._id === product._id) return {
    //       ...cartProduct,
    //       quantity: cartProduct.quantity + quantity
    //     }
    //   })

    //   setCartItems(updatedCartItems);
    // } else {
    //   product.quantity = quantity;
      
    //   setCartItems([...cartItems, { ...product }]);
    // }

//     toast.success(`${qty} ${product.name} added to the cart.`);
//  } 

//   const onRemove = (product) => {
//     foundProduct = cartItems.find((item) => item._id === product._id);
//     const newCartItems = cartItems.filter((item) => item._id !== product._id);

//     setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
//     setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
//     setCartItems(newCartItems);
//   }

//   const toggleCartItemQuanitity = (id, value) => {
//     foundProduct = cartItems.find((item) => item._id === id)
//     index = cartItems.findIndex((product) => product._id === id);
//     const newCartItems = cartItems.filter((item) => item._id !== id)

//     if(value === 'inc') {
//       setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
//       setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
//       setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
//     } else if(value === 'dec') {
//       if (foundProduct.quantity > 1) {
//         setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
//         setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
//       }
//     }
//   }

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
  
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider 
      value={{
        bar, 
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
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
        isLogin,
        setAuthFunc,
        orders,
        setOrders,
        asCompany,
        setAsCompany,
        auth,
        setAuth,
        checkAuth,
        setCurrentColor,
        setCurrentMode, 
        setMode, 
        setColor, 
        themeSettings, 
        setThemeSettings 
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
