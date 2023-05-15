import { dummyImg } from "../constants"

const CompanyWidget = ({name, logo, slogan, description}) => {
  return (
    <div className='bg-slate-100 shadow-lg flex flex-col flex-wrap md:flex-nowrap rounded-xl w-25 h-25 hover:bg-primaryDark hover:text-slate-50 hover:shadow-2xl'>
      <div className='m-auto p-2 flex flex-col justify-center items-center gap-2 text-primaryDark hover:text-slate-50'>   
        <div className='overflow-hidden w-100 bg-red-500'>
            <img className='object-cover w-40 h-40' src={logo || dummyImg} alt={name} /> 
        </div>
        <div className="w-100 h-100 m-auto justify-start">
          <hr className="h-1 bg-slate-100" /> 
          <h2 className='font-bold text-2xl'>{name}</h2>
          <div className="w-100 h-100">
            <p className='text-center font-poppins'>{slogan}</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyWidget