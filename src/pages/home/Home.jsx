import React from 'react'
import Banner from '../../components/Banner'
import JobCategoryList from '../../components/JobCategoryList'
import Featured from '../../components/Featured'

const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategoryList />
      <Featured />
    </div>
  )
}

export default Home