
const CompanyWidget = ({name, logo, slogan, description}) => {
  return (
    <div className='flex flex-row flex-wrap items-center bg-slate-100 p-5 rounded-xl w-100 h-full gap-2 cursor-pointer hover:shadow-2xl hover:bg-primaryDark text-black hover:text-dimWhite'>
        <div className='overflow-hidden w-50 bg-transparent-70 shadow-lg border-1'>
            <img className='object-cover w-40 h-40' src={logo} alt={name} /> 
        </div>
        <div className=" flex flex-col items-start justify-center" >
          <h2 className='font-bold text-2xl'>{name}</h2>
          <p className='w-50 h-50 text-center '>Slogan: {slogan}</p>
          <p className='w-50 h-50 text-center '>Description: {description}</p>
        </div>
        
    </div>
  )
}

export default CompanyWidget