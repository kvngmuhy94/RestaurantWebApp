

const ProductWidget = ({ image, productName, price, productDesc, category}) => {
  return (
    <div className='bg-slate-50 shadow-lg flex flex-col flex-wrap md:flex-nowrap rounded-xl w-25 h-25 hover:bg-primaryDark hover:text-slate-50 shadow-2xl'>
    <div className='m-auto p-2 flex flex-col justify-center items-center gap-2 text-primaryDark hover:text-slate-50'>
        <div className="overflow-hidden w-full h-1/2">
            <img className='object-cover w-40 h-40 shadow-lg'
             src={image} 
             alt={productName} />
        </div>
        
        <div className="w-full h-1/2">
        <hr className="h-1 bg-slate-100" />
            <h1 className='font-bold text-xl w-50'>{productName}</h1>
            <p className='font-bold text-xl '># {price}</p>
            <p className='font-normal text-sm  '>{productDesc}</p>
            <span className='font-semibold text-sm' >{category}</span>
        </div>
    </div>   
</div>
  )
}

export default ProductWidget