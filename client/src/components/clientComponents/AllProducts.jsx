import {useState} from 'react'
import {ProductWidget} from '../index.js'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const AllProducts = ({products}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 16;
    const pageVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)

   
    const changePage = ({selected}) => {
      setPageNumber(selected);
    }


  return (
    <section className='py-10 px-10 rounded-2xl bg-slate-100 shadow-lg'> 
        <div className='flex items-center gap-2 md:gap-10'>
          
        <h2 className='font-bold text-2xl'>All products</h2>
        {/* <span className='font-light text-lg'>From: </span>
        <div className='w-48'>
        <TextField
          id="category"
          select
          defaultValue="all product"
          variant="outlined"
          fullWidth
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            getProductByCategory(selectedCategory)
          }}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>
        </div> */}
        </div>
        <hr className="h-1 bg-slate-400 border-0" />
        <div className='flex flex-row flex-wrap gap-1 md:gap-10 px-5 justify-center items-center py-10'>
          
          { products.length != 0 
            ?
            products.slice(pageVisited, pageVisited + productsPerPage).map((product) =>(
              <div key={product.id} >
                <ProductWidget id={product.id} productName={product.name} image={product.image} price={product.price} productDesc={product.desc} category={product.categoryName} />  
              </div>
            ))
            :
            <h1 className='text-2xl font-bold text-slate-400'>No product in database</h1>
          }
          
        </div>
        {
          products.length >= 17 &&

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

export default AllProducts