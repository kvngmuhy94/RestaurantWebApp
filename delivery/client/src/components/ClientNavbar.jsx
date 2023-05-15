import { SearchOutlined, AccountCircleRounded, ShoppingCartRounded, ArrowDropDownRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Cart from './Cart';

const ClientNavbar = ( {placeholder}) => {
    const { showCart, setShowCart, totalQuantities, setIsClicked } = useStateContext();

  return (
    <nav className='fixed top-0 w-full bg-slate-200 shadow-lg py-2' >
        <div className='flex flex-row justify-between items-center shadow-sm px-10'>
        <div>
            <h2 className='font-bold text-2xl text-primary'> 
                <Link to="/">
                    Logo
                </Link>
            </h2>
        </div>
        <div className='flex flex-row items-center rounded-xl mx-2 border-1 shadow-sm'>
            <SearchOutlined className='text-slate-500' />
            <fieldset>

                <input type="text" className='p-1 bg-transparent active:bg-slate-300 text-slate-700 w-100 md:w-80' placeholder={placeholder} />
            </fieldset>
            <button className='bg-primary hover:bg-dimWhite text-white hover:text-primary font-bold text-xl p-1  rounded-r-lg px-4 ' type='button'>
                Search</button>
        </div>
        <div className="text-primaryDark  text-xl flex gap-5 justify-center">
            <button type="button" 
                    className='justify-center cursor-pointer '
                    onClick={() => setShowCart(true)}><ShoppingCartRounded />
                <span className='bg-red-600 rounded-full relative bottom-2 right-1 text-sm w-5 h-5'>{totalQuantities}</span>
            </button>
            {showCart && <Cart />} 
            <button 
                className='justify-center hover:font-bold cursor-pointer'
                onClick={() => setUse}
                ><AccountCircleRounded /><ArrowDropDownRounded />
            </button>
            
        </div>
        </div>
    </nav>
  )
}

export default ClientNavbar