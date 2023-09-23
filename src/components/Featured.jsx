import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import Job from './Job'
import Button from '../utils/button/Button'

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [jobsLength, setJobLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then((res) => res.json())
        .then((data) => setJobs(data))
    },[])
  return (
    <div className='py-16'>
        <SectionTitle className="mb-6" title={'Featured Jobs'} desc="Explore thousands of job opportunities with all the information you need. Its your future" />
        <div className='grid gap-4  px-4 md:px-16 lg:px-24 grid-cols-1 md:grid-cols-2'>
            {
                jobs.slice(0, jobsLength).map((item) => <Job key={item.id} item={item} />)
            }
        </div>
        <div onClick={() => setJobLength(jobs.length)} className={`text-center ${jobsLength === jobs.length ? "hidden" : ""} my-10`}>
            <Button text={'See All Jobs'}></Button>
        </div>
    </div>
  )
}

export default Featured