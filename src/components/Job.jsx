import React from "react";
import Button from "../utils/button/Button";
import { CiLocationOn } from 'react-icons/ci';
import {AiOutlineDollarCircle} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Job = ({ item }) => {
  return (
    <div className="border-2">
      <div className="flex ml-9 mt-8">
        <img
          src={item.logo}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.job_title}</h2>
        <p>{item.company_name}</p>
        <div className="flex gap-2">
            <button className="px-3 py-1.5 font-semibold border-[#7E90FE] text-[#7E90FE] border-2 ">{item.job_type}</button>
            <button className="px-3 py-1.5 font-semibold border-[#7E90FE] text-[#7E90FE] border-2 ">{item.remote_or_onsite}</button>
        </div>
        <div className="flex-col lg:flex gap-5 text-[#757575]">
            <div className="flex items-center gap-2"><CiLocationOn /><p>{item.location}</p></div>
           <div className="flex items-center gap-2"><AiOutlineDollarCircle /><p>Salary: {item.salary}</p></div>
        </div>
        <div className="card-actions ">
            <Link to={`/job/${item.id}`}>
              <Button text={'Details'}></Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
