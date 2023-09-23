import React, { useEffect, useState } from "react";
import getJobList from "../.../../../utils/localStore";
import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/bg1.png";
import img2 from "../../assets/images/bg2.png";
import ApplyJob from "../../components/ApplyJob";

const AppliendJobs = () => {
  const jobs = useLoaderData();
  const [applyJobs, setApplyJobs] = useState([]);
  const [filterJob, setFilterJob] = useState([]);

  useEffect(() => {
    const jobList = getJobList.getJobList();
    const applyjobs = jobs.filter((job) => jobList.includes(job.id));
    setApplyJobs(applyjobs);
    setFilterJob(applyjobs)
  }, []);

  const handleFilter = (text) => {
    if(text == 'all') {
      setFilterJob(applyJobs)
    }else if(text === 'Remote') {
      const RemoteJobs = applyJobs.filter((item) => item.remote_or_onsite === 'Remote')
      setFilterJob(RemoteJobs)
    }else if (text === 'Onsite') {
      const OnsiteJobs = applyJobs.filter((item) => item.remote_or_onsite === 'Onsite')
      setFilterJob(OnsiteJobs)
    }
  }

  return (
    <div>
      <div className="bg-[#7e90fe26] relative h-[150px]">
        <img
          className="w-[150px] absolute bottom-0 right-0"
          src={img1}
          alt=""
        />
        <img className="absolute w-[150px] top-0 left-0" src={img2} alt="" />
        <h1 className="text-3xl text-center pt-9 font-semibold">Job Details</h1>
      </div>

      <div className="dropdown mt-8   flex justify-center">
        <label tabIndex={0} className="btn bg-gradient-to-r text-white font-semibold from-[#7E90FE] to-[#9873FF] m-1">
         Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content bg-gradient-to-r z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => handleFilter('all')}>All</a>
          </li>
          <li>
            <a onClick={() => handleFilter('Remote')}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleFilter('Onsite')}>Onsite</a>
          </li>
        </ul>
      </div>

      <div className="px-6 mb-10 md:px-16 lg:px-24 ">
        {filterJob.map((job) => (
          <ApplyJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliendJobs;
