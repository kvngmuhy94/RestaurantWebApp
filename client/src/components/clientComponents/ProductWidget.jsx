import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { dummyImg } from '../../constants'
import { useStateContext } from '../../context/ContextProvider'
import { getProduct } from '../../services/clientServices'


const ProductWidget = ({ image, productName, price, productDesc, category,id}) => {
  const navigate = useNavigate()
  const {onAdd} = useStateContext();
  const qty = 1
  // console.log(id)
  const [product, setProduct] = useState()
  const handleBuyNow =async () => {
    await getProduct(setProduct);
    onAdd(product, qty);

  }
  return (
    <div className='flex flex-col flex-wrap md:flex-nowrap bg-slate-200 w-full h-50 rounded-lg hover:bg-primaryDark hover:text-slate-50 hover:scale-105 transition-all hover:translate-y-2'>
    <div className='m-auto border-1 flex flex-col justify-center items-center gap-2 text-primaryDark hover:text-slate-50'>
        <div className="overflow-hidden w-full h-1/2 shadow-lg rounded-lg"
        onClick={()=> {
          sessionStorage.setItem('product_id', id);
          navigate(`/company/${sessionStorage.getItem('company_Id')}/product/${id}`)}}
        >
            <img className='object-cover w-48 h-48'
             src={image || dummyImg} 
             alt={productName} />
        </div>
        
        <div className="w-full h-1/2">
        
            <h1 className='font-bold text-2xl w-50'>{productName}</h1>
            <p className='font-light text-xl '># {price}</p>
            {/* <p className='font-normal text-sm  '>{productDesc}</p>
            <span className='font-semibold text-sm' >{category}</span> */}
        </div>
        <div>
          {/* <hr className="border-2 text-red-500 text-xl bg-red-500" /> */}
          {/* <button className="bg-primary p-2 text-white my-2 rounded-lg hover:bg-slate-50 hover:text-primary"
            onClick={handleBuyNow}>Add To Cart</button> */}
        </div>
    </div>   
</div>
  )
}

export default ProductWidget