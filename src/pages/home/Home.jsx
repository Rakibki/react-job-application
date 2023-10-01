import React from 'react'
import Banner from '../../components/Banner'
import JobCategoryList from '../../components/JobCategoryList'
import Featured from '../../components/Featured'
import {Helmet} from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <JobCategoryList />
      <Featured />
    </div>
  )
}

export default Home