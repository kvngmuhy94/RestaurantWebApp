import React,{useState, useEffect} from 'react'
import { BarSm, LgWidget, LineSm, AdminNewProducts, PieSm, SmWidget, NewCompanies } from '../../components'
import { getAllCompanySuper, getAllUsers } from '../../services/adminServices';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    getAllUsers(setUsers)
    getAllCompanySuper(setCompanies)
  }, []);

  const newCompanies = companies.slice(-5)
  


  return (
    <div className='m-2 md:m-5 mt-2 p-2 md:p-10 w-100 bg-white rounded-3xl pt-5 md:pt-20'>
        <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center '>
          <div className='h-auto md:h-30 w-full py-2 md:py-5 flex flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-3'>
            <SmWidget title="Total Companies" number={companies?.length} bg="bg-red-500" color="white" />
            <SmWidget title="Total Users" number={users?.length}  bg="bg-orange-500" color="white" />
            <SmWidget title="Total Revenue" number={`# ${"20000000"}`} bg="bg-green-500" color="white" />
            
            
          </div>
          <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4'>
            <LgWidget chart={<PieSm />} title="Analysis 1"/>
            <LgWidget chart={<BarSm />} title="Analysis 2"/>
            {/* <LgWidget chart={<LineSm />} title="Analysis 3"/> */}
          </div>
          <div className='flex flex-col md:flex-row justify-evenly flex-nowrap gap-10 md:gap-5 mt-5 w-full'>
            <div className="flex-col bg-slate-100 p-4 rounded-lg shadow-lg w-full ">
              <h2 className='font-bold text-lg mb-2'>Latest Activities</h2>
              <AdminNewProducts />
            </div>
            <div className="flex-col  bg-slate-100 p-4 rounded-lg shadow-lg w-full ">
              <h2 className="font-bold text-lg mb-2" >Newly Registered Companies</h2>
              <NewCompanies newCompanies={newCompanies} />
            </div>
            
            
            
          </div>           
        </div>
    </div>
  )
}

export default Home