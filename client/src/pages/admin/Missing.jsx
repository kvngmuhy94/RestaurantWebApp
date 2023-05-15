import { Link } from "react-router-dom"
import { error404 } from "../constants"


const Missing = () => {
  return (
    <div className='h-screen w-screen bg-blue-200 flex '>
      <div className="m-auto bg-slate-200 h-100 w-100 p-5 rounded-lg flex flex-col items-center">
          <p className="text-center mt-10 bg-blue-400 rounded-xl font-semibold text-2xl md:w-1/2 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
            <Link to={"/home"}>
            Go home
            </Link>
          </p>
         <img src={error404} alt="404 ERROR PAGE" />
      </div>
    </div>
  )
}

export default Missing