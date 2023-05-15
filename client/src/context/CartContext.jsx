import { createContext, useEffect, useState } from "react";
import axios from "../api/axios";
// import { productsArray, getProductData } from "./productsStore";



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [productsArray, setProductsArray] = useState([]);




    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]
useEffect(() => {
      // console.log(companyId);
      const token = sessionStorage.getItem('token');
      const headers = {authorization: `Bearer ${token}`}
  
      const getProducts = async () =>{
  
        try {
          const response = await axios.get(`product/get`, {
            headers: headers
          });
          // isMounted && setProducts(response.data)
        //   console.log(response.data);
          setProductsArray(response.data)
          console.log(productsArray);
        } catch (error) {
          console.log(error);
        }
      }
      getProducts()
}, [])

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }
    function getProductPrice(id) {
        const price = productsArray.find(product => product.id === id)?.price;

        if (price === undefined) {
            return 0
        }
        return price
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(sessionStorage.getItem('product_Id'));
        const price = getProductPrice(id)
        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        price: price
                    }
                ]
            )
           
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context