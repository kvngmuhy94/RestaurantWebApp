import React, { useState } from 'react'
import CompanyProductWidget from './CompanyProductWidget'
import ReactPaginate from 'react-paginate'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const CompanyProducts = ({products, categories}) => {

   
    const [pageNumber, setPageNumber] = useState(0);
   

    const productsPerPage = 12;
    const pageVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)

   
    const changePage = ({selected}) => {
      setPageNumber(selected);
    }


  return (
    <div className='w-full flex flex-row gap-10 md:gap-20 flex-wrap pt-10'>
        {
          products.length === 0 ? 
          <h1 className='font-bold text-xl text-slate-500'>No Product for this company</h1>
          :
          
            products.slice(pageVisited, pageVisited + productsPerPage).map((product, index) => (
              <div key={index} className='flex flex-col' >
                <CompanyProductWidget name={product.name} companyId={product.companyId} status={product.status} id={product.id} image1={product?.image1} price={product.price} qty={product.qty} desc={product.description} catId={product?.categoryId} categories={categories} />
              </div>
            ))
          
        }
        {
        products.length >= 13 && 
            <ReactPaginate 
            previousLabel={<ArrowBackIos />}
            nextLabel={<ArrowForwardIos />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationButtons'}
            previousLinkClassName={'previousButton'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
            
        />
        }
      </div>
  )
}

export default CompanyProducts