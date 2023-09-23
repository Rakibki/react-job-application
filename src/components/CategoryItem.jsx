import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className='p-6 bg-[#7e90ff12] rounded-md'>
        <img src={item.logo} alt="" />
        <h3 className='text-lg font-semibold text-[#474747]'>{item.category_name}</h3>
        <span className='text-[#A3A3A3]'>{item.availability}</span>
    </div>
  )
}

export default CategoryItem