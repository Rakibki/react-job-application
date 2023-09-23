import React from "react";
import bannerImg from '../assets/images/user.png'
import Button from "../utils/button/Button";

const Banner = () => {
  return (
    <div className="hero items-center  px-4 md:px-16 lg:px-24 w-full bg-[#7e90fe0d]">
      <div className="hero-content gap-16 w-full flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="lg:max-w-lg rounded-lg"
        />
        <div>
          <h1 className="text-5xl leading-tight font-bold">One Step <br /> Closer To Your <br /><span className="text-[#9873FF]">Dream Job</span> </h1>
          <p className="py-6 text-[#757575]">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.          </p>
        <Button text={'Get Started'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
