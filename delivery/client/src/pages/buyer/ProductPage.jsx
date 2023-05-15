import { Add, Remove, Star } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { ClientNavbar, ProductWidget } from "../../components"
import { useStateContext } from "../../context/ContextProvider";
import {products} from "../../dummy-data/database"
import axios from "../../api/axios";
import { CartContext } from "../../context/CartContext";
import { dummyImg } from "../../constants";


const ProductPage = () => {
  const [product, setProduct] = useState([]);

  
  

  // const product = products.find(product => String(product.id) === sessionStorage.getItem('product_id'));
  
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const {addOneToCart,removeOneFromCart, items} = useContext(CartContext);

  
  console.log();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    const getProduct = async () =>{

      try {
        const response = await axios.get(`product/getbyid/${sessionStorage.getItem('product_id')}`, {
          headers: headers
        });
        // isMounted && setProducts(response.data)
        // console.log(response.data);
        setProduct(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    getProduct()
  }, [])

  const handleAdd = () => {
    
  }
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div >
        
        <div className="flex flex-row justify-evenly pt-10">
          <div className="product-detail-container">
            <div>
            <div className="image-container">
              <img src={product?.image1 || dummyImg} alt={product?.name}
                className="product-detail-image" />
            </div>
            <div className="small-images-container">
              
              {/* {image?.map((item, i) => (
                <img 
                  key={i}
                  src={(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))} */}
            </div>
            </div>
            
            <div className="product-detail-desc">
          <h1 className="font-bold text-4xl">{product?.name}</h1>
          <div className="flex items-center mt-2">
            <h3 className="font-normal">Category: <span>{product?.categoryName}</span></h3>
            
          </div>
          <h4 className="font-bold">Details: </h4>
          <p>{product?.description}</p>
          <p className="font-bold text-3xl text-green-600"># {product?.price}</p>
          <div className="quantity">
            <h3 className="font-bold text-xl">Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><Remove /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><Add /></span>
            </p>
          </div>
          <div className="flex flex-row mt-10 gap-5">
            <button type="button" className="bg-slate-200 items-center justify-center rounded-lg text-primary item-center border-2 border-primary px-10 my-auto py-5 text-lg" onClick={() => addOneToCart(sessionStorage.getItem('product_id'))}>Add to Cart</button>
            <button type="button" className="bg-primary text-white items-center justify-center rounded-lg my-auto py-5 px-10 text-lg border-2 border-primary" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>

          </div>
        </div>

        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {
                   products.map((product, index) =>(
                    <Link to={`/company/product/${product.id}`} key={product.id}>
                      <ProductWidget productName={product.name} image={product.image} price={product.price} productDesc={product.desc} category={"category"} />  
                    </Link>
                  )) 
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage