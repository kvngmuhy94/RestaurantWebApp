import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AppPagination = () => {
  return (
    <div>
        <div>
            <Pagination count={10} color="primary" />
        </div>
    </div>
  )
}

export default AppPagination