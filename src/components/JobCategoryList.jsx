import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import CategoryItem from './CategoryItem'

const JobCategoryList = () => {
    const [CategoryList, setCategoryList] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then((res) => res.json())
        .then((data) => setCategoryList(data))
    }, [])
  return (
    <div>
        <SectionTitle title={'Job Category List'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'} />
            <div className='grid gap-3 grid-cols-1  px-4 md:px-16 lg:px-24 md:grid-cols-2 lg:grid-cols-4'>
                {
                    CategoryList.map((item) => <CategoryItem item={item} key={item.id} />)
                }
            </div>
       </div>
  )
}

export default JobCategoryList