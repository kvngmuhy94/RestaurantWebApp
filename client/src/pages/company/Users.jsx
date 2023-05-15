import React from 'react'
import { Header, UsersTable } from '../../components'

const Users = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Users" />
      <UsersTable />
    </div>
  )
}

export default Users

//select all users
//uodate user status by id
//change password