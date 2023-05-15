import React, { useEffect, useState } from 'react'
import { Header, UsersTable } from '../../components'
import { getAllUsers } from '../../services/adminServices';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers)
  
  }, []);
  
 
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl pt-5 md:pt-20">
      <Header category="Page" title="Users" />
      <UsersTable users={users} />
    </div>
  )
}

export default Users;