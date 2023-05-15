import React,{useEffect, useState} from 'react'
import { BarSm, LgWidget, LineSm, NewProducts,  PieSm, SmWidget, TopProducts } from '../../components'
import { useStateContext } from '../../context/ContextProvider';
import axios from '../../api/axios';

const Home = () => {
  const { auth, currentColor,  asCompany, setAsCompany, setIsClicked, initialState } = useStateContext();
  const [products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const companyId = sessionStorage.getItem('company_Id')
  
  let latestProducts = products.slice(-5)
  let Topproducts = products.slice(-4)
  useEffect(()=>{
    setAsCompany(true)
  }, [])
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    const getProducts = async () => {
      try {
        const response = await axios.get(`product/getproductByCompany/${companyId}`, {
          headers: headers
        })
        console.log(response.data)
        setproducts(response.data)
      }catch (error){
        console.log(error);
      }
    };
    
    
    const fetchCategories = async () =>{
      try {
        const response = await axios.get(`category/getCategoryByCompany/${sessionStorage.getItem('company_Id')}`, {
          headers: headers
        });
        // console.log(response.data)
        setCategories(response.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchCategories();
    getProducts()
  }, [])
  
 


  return (
    <div className='m-2 md:m-5 mt-2 pt-10 p-2 md:p-10 w-100 bg-white rounded-3xl'>
        <div className='flex flex-col lg:flex-nowrap justify-center '>
          <div className='h-auto md:h-30 w-full py-2 md:py-5 flex flex-row flex-wrap md:flex-nowrap items-center justify-evenly items-center gap-3'>
            <SmWidget title="Total Products" number={products.length} h1Color="primary" />
            <SmWidget title="Total Category" number={categories?.length}  h1Color={"primary"}/>
            <SmWidget title="Total Orders" number={"XXXX"} h1Color="primary" />
            
            
          </div>
          <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4'>
            <LgWidget chart={<PieSm />} title="Analysis 1"/>
            <LgWidget chart={<BarSm />} title="Analysis 2"/>
            {/* <LgWidget chart={<LineSm />} title="Analysis 3"/> */}
          </div>
          <div className='flex flex-col md:flex-row justify-evenly flex-nowrap gap-10 md:gap-5 mt-5 w-full'>
            <div className="flex-col bg-slate-100 p-4 rounded-lg  w-full shadow-xl h-full">
              <h2 className='font-bold text-lg mb-2 text-primaryDark'>Newly Added Products</h2>
              <NewProducts products={latestProducts} />
            </div>
            <div className="flex-col  bg-slate-100 p-4 rounded-lg w-full shadow-xl">
              <h2 className="font-bold text-lg mb-2 text-primaryDark" >Top Products</h2>
              <TopProducts Topproducts={Topproducts} />
            </div>
            
            
            
          </div>           
        </div>
    </div>
  )
}

export default Home