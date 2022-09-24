import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  return (
      <div>
          <header>
               
          </header>
          <Outlet/>
    </div>
  )
}

export default ProtectedLayout