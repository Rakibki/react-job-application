import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex justify-center mt-36'>
        <div className='flex items-center flex-col'>
            <h2 className='text-xl'>Opps!!!</h2>
            <NavLink to={'/'}><button className='btn mt-6'>Go Home</button></NavLink>
        </div>
    </div>
  )
}

export default Error