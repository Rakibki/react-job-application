import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import img1 from "../assets/images/bg1.png";
import img2 from "../assets/images/bg2.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addToLocaStore from "../utils/localStore";

const JobDetais = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((item) => item.id == id);

  const naviget = useNavigate()

  const handleApply = () => {
    toast.success("You Have Applied successfully")
    addToLocaStore.addToLocaStore(job.id)
  }

  return (
    <div className="w-full">
      <div className="bg-[#7e90fe26] relative h-[150px]">
        <img
          className="w-[150px] absolute bottom-0 right-0"
          src={img1}
          alt=""
        />
        <img className="absolute w-[150px] top-0 left-0" src={img2} alt="" />
        <h1 className="text-3xl text-center pt-9 font-semibold">Job Details</h1>
      </div>

      <div className="lg:grid px-6 md:px-16 lg:mx-24 lg:gap-8 my-20 grid-cols-4">
        <div className="col-span-3 flex flex-col gap-6">
            <p><span className="font-bold">Job Descriptio</span><span className="text-[#757575]">: {job.job_description}</span></p>
            <p><span className="font-bold">Job Responsibility</span><span className="text-[#757575]">: {job.job_responsibility}</span></p>
            <p><span className="font-bold">Educational Requirements:</span> <br /> <span className="text-[#757575]">: {job.educational_requirements}</span></p>
            <p><span className="font-bold">Experiences:</span> <br /> <span className="text-[#757575]">: {job.experiences}</span></p>
            <div className="flex mb-6 gap-2">
                <button onClick={() => naviget(-1)} className="btn shadow-2xl bg-gradient-to-r text-sm font-semibold text-white from-[#9873FF] to-[#7e90fe80] btn-sm">Go Back</button>
                <button onClick={() => naviget('/')} className="btn shadow-2xl bg-gradient-to-r text-sm font-semibold text-white from-[#9873FF] to-[#7e90fe80] btn-sm">Go Home</button>
            </div>
        </div>
        <div className="lg:col-span-1 shadow-xl rounded-2xl">
            <div className="bg-gradient-to-r from-[#7e90fe80] to-[#7e90fe80] mb-2 p-6">
                <div>
                    <h2 className="text-lg font-bold">Job Details</h2>
                    <div className="border-b-2 mt-4"></div>
                    <div className="mt-2 flex flex-col gap-1">
                        <p><span className="font-semibold">Salary</span>: <span className="text-[#757575]">{job.salary}</span></p>
                        <p><span className="font-semibold">Job Title:</span><span className="text-[#757575]">{job.job_title}</span></p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Contact Information</h2>
                    <div className="border-b-2 mt-3"></div>
                    <div className="mt-2 flex flex-col gap-1">
                        <p><span className="font-semibold">Phone</span>: <span className="text-[#757575]">{job.contact_information.phone}</span></p>
                        <p><span className="font-semibold">Email</span>: <span className="text-[#757575]"> {job.contact_information.email}</span></p>
                        <p><span className="font-semibold">Address</span>: <span className="text-[#757575]">{job.contact_information.address}</span></p>
                    </div>
                </div>
            </div>
            <button onClick={handleApply} className="btn text-white font-semibold bg-gradient-to-r from-[#9873FF] to-[#7e90fe80] w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  );
};

export default JobDetais;
