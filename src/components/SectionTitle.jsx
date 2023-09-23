import React from 'react'

const SectionTitle = ({title, desc}) => {
  return (
    <div className='text-center py-6 mt-12'>
        <h1 className='text-3xl mb-3 text-black font-bold'>{title}</h1>
        <p className='text-[#757575]'>{desc}</p>
    </div>
  )
}

export default SectionTitle