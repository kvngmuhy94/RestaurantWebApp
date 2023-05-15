import React from 'react'
import { BarSm, LgWidget, LineSm, NewProducts, NewUsers, PieSm, SmWidget } from './../components'

const Home = () => {
  return (
    <div className='m-2 md:m-5 mt-2 p-2 md:p-10 w-100 bg-white rounded-3xl'>
        <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center '>
          <div className='h-auto md:h-30 w-full py-2 md:py-5 flex flex-row flex-wrap md:flex-nowrap items-center justify-evenly items-center gap-3'>
            <SmWidget title="Total Companies" number={"20"} bg="bg-red-500" />
            <SmWidget title="Total Users" number="1000"  bg="bg-orange-500" />
            <SmWidget title="Total Revenue" number={`# ${"20000000"}`} bg="bg-green-500" />
            
            
          </div>
          <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4'>
            <LgWidget chart={<PieSm />} title="Analysis 1"/>
            <LgWidget chart={<BarSm />} title="Analysis 2"/>
            <LgWidget chart={<LineSm />} title="Analysis 3"/>
          </div>
          <div className='flex flex-col md:flex-row justify-evenly flex-nowrap gap-10 md:gap-5 mt-5 w-full'>
            <div className="flex-col bg-slate-100 p-4 rounded-lg shadow-lg w-full ">
              <h2 className='font-bold text-lg mb-2'>Latest Activities</h2>
              <NewProducts />
            </div>
            <div className="flex-col  bg-slate-100 p-4 rounded-lg shadow-lg w-full ">
              <h2 className="font-bold text-lg mb-2" >Newly Registered Companies</h2>
              <NewUsers />
            </div>
            
            
            
          </div>           
        </div>
    </div>
  )
}

export default Home