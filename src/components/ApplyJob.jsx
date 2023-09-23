import React from 'react'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

const ApplyJob = ({job}) => {
  return (
    <div className='max-w-5xl mx-auto mt-4 p-4 flex gap-3 items-center border-2'>
        <div className='w-[200px] flex justify-start items-center h-[150px] bg-[#F4F4F4] '>
            <img className='mx-auto' src={job.logo} />
        </div>
        <div>
            <h2 className='text-xl md:text-2xl mb-2 font-semibold'>{job.job_title}</h2>
            <p className='text-[#757575] font-semibold mb-1'>{job.company_name}</p>
            <div className="flex gap-2">
                <button className="px-3 py-1.5 font-semibold border-[#7E90FE] text-[#7E90FE] border-2 ">{job.job_type}</button>
                <button className="px-3 py-1.5 font-semibold border-[#7E90FE] text-[#7E90FE] border-2 ">{job.remote_or_onsite}</button>
            </div>
            <div className="lg:flex gap-5 mt-2 text-[#757575]">
                <div className="flex items-center gap-2"><CiLocationOn /><p>{job.location}</p></div>
                <div className="flex items-center gap-2"><AiOutlineDollarCircle /><p>Salary: {job.salary}</p></div>
            </div>
        </div>
    </div>
  )
}

export default ApplyJob