
// import { makeStyles } from '@mui/material';
import CompanyWidget from './CompanyWidget'
import ReactPaginate from 'react-paginate'
import { useStateContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const RegisteredCompanies = ({companies}) => {

    const {setCompanyId, companyId, auth} = useStateContext();
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate();    

    const companiesPerPage = 15;
    const pageVisited = pageNumber * companiesPerPage
    const pageCount = Math.ceil(companies.length / companiesPerPage)

   
    const changePage = ({selected}) => {
      setPageNumber(selected);
    }

  return (
    <section className='pb-10 px-10 py-2 md:py-10 bg-slate-200 shadow-lg'>
    <div className='flex flex-row items-center justify-start gap-1 md:gap-10'>
      <h2 className='font-bold text-2xl uppercase'>Registered Companies</h2>
      {/* <p>Of Type: </p>
      <div>
        <TextField
          id="comptype"
          select
          defaultValue=""
          variant="outlined"
          inputRef={companyRef}
        >
          {companyTypes.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div> */}
    </div> 
    <hr className="h-1 bg-slate-400 border-0" />
  
    <div className='flex flex-col md:flex-row flex-wrap gap-10 px-5 justify-start items-center py-10'>
      {
        companies.slice(pageVisited, pageVisited + companiesPerPage).map((item, index) => (
          <div key={item.id} onClick={() => {
            setCompanyId(item.id)
            sessionStorage.setItem('company_Id', item.id)
            navigate(`/company/${item.id}/index`)}} >

            <CompanyWidget name={item.company_name} logo={item.logo} slogan={item.slogan} />
          </div>
        ))
      }
     
      
      
    </div>
    {
      companies.length >= 16 && 
      <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationButtons'}
          previousLinkClassName={'previousButton'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          
        />
    }
  </section>
  )
}

export default RegisteredCompanies