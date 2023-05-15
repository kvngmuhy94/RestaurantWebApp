import { AddCircleOutline, Apple, BrunchDining, CancelOutlined, Icecream, Liquor, LunchDining, TakeoutDining } from '@mui/icons-material'
import React, { useRef, useState,useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useStateContext } from '../../context/ContextProvider'
import { Button, CategoryWidget, Header } from './../../components'
import { Box, TextField } from '@mui/material'
import axios from '../../api/axios'

const Category = () => {
  
  const [catform, setCatform] = useState(false)
  const [ companyId, setCompanyId] = useState(sessionStorage.getItem('company_Id'));

  const userRef = useRef()
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
   
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}
    
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
  }, [categories])



  const handleSubmit = (e) =>{
    e.preventDefault();
    if (name != ''){
    axios.post('category/add', {companyId, name},{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(res => {
      const token = res.data.token
      localStorage.getItem('token', token)
      // console.log(res);
      toast.success(`Category ${name} Created.`);
    })
    .catch(err => console.log(err))
    setName('')
    setCatform(false)
  }}


  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
      <div className='pt-20'>

        <Header category="Page" title="Category" />
      </div>
      <div className="flex flex-row justify-center md:justify-end my-1 md:m-10">
      <Toaster />
          <div onClick={() =>setCatform(!catform)} >

            <Button
              color="white"
              bgColor={!catform ? "primary" : "primaryLight"}
              text={!catform ? "Add a Category" : "Close Form"}
              borderRadius="10px"
              width="half"
              height="full"
              icon={!catform ? <AddCircleOutline /> : <CancelOutlined />}
              
            />
          </div>
      </div>
      <div className='pb-10'>
        {
          catform &&
          <Box
                        component="form"
                        sx={{
                    '& .MuiTextField-root': { m: 2, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col md:flex-row gap-10 md:gap-1 justify-between items-center shadow-xl "
                    >

                        <div>
                            <TextField
                                id="name"
                                label="Category name"
                                type="text"
                                placeholder="Category Name"
                                inputRef={userRef}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variant="outlined"
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="companyId"
                                label="Company ID"
                                type="text"
                                value={companyId}
                                
                                variant="outlined"
                                
                            />
                        </div>
                        <div className='flex gap-10'>
                            <Button
                                color="white"
                                bgColor={"green"}
                                text="Add"
                                borderRadius="10px"
                                type="submit"
                                width="half"
                                height="100"
                                icon={<AddCircleOutline />}
                                
                            />
                            
                        </div>
                        <hr className='h-1 bg-slate-300 my-2'/>
                    </Box>
        }
      </div>
      <div className='flex flex-row md:flex-row flex-wrap justify-evenly items-center gap-10'>
        {
           categories.length === 0 ? 
           <h1 className='font-bold text-xl text-slate-500'>No Category for this company</h1>
           :

          categories.map((item)=>(
            <div key={item.id}>
              <CategoryWidget category={item.name} quantity={item?.qty} id={item?.id} />
            </div>
          ))
        }
        
        
        {/* <CategoryWidget category="Fruits" quantity="10" icon={<Apple />}/>
        <CategoryWidget category="Icecreams" quantity="10" icon={<Icecream />}/>
        <CategoryWidget category="Takeouts" quantity="10" icon={<TakeoutDining />}/>
        <CategoryWidget category="Takeouts" quantity="10" icon={<TakeoutDining />}/> */}
      </div>
    </div>
  )
}

export default Category


//Add a category
//select all from category order by name
//update a category