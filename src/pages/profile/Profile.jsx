import React, { useContext } from 'react'
import { useUserAuth } from '../../components/UserAuth'

const Profile = () => {
  const {user} = useContext(useUserAuth)
  return (
    <div className='p-6 py-16 bg-[#efefef]'>
        <h1 className='text-3xl font-semibold'>user infomation</h1>
        <p>name: {user.displayName}</p>
        <p>email: {user.email}</p>
    </div>
  )
}

export default Profile