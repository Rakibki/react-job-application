import React from "react";
import Logos from '../assets/images/Group 9969.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#1A1919] text-base-content">
      <aside>
        <h3 className="text-2xl font-semibold text-white">
          CareerHub
          </h3>
         <p className="text-[#ffffffb3]"> There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
          <div>
            <img src={Logos} alt="" />
          </div>
      </aside>
      <nav>
        <header className="text-xl font-semibold text-white">Services</header>
        <a className="link link-hover text-[#ffffffb3]">Branding</a>
        <a className="link link-hover text-[#ffffffb3]">Design</a>
        <a className="link link-hover text-[#ffffffb3]">Marketing</a>
        <a className="link link-hover text-[#ffffffb3]">Advertisement</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Company</header>
        <a className="link link-hover text-[#ffffffb3]">About us</a>
        <a className="link link-hover text-[#ffffffb3]">Contact</a>
        <a className="link link-hover text-[#ffffffb3]">Jobs</a>
        <a className="link link-hover text-[#ffffffb3]">Press kit</a>
      </nav>
      <nav>
        <header className=" text-xl font-semibold text-white">Legal</header>
        <a className="link link-hover text-[#ffffffb3]">Terms of use</a>
        <a className="link link-hover text-[#ffffffb3]">Privacy policy</a>
        <a className="link link-hover text-[#ffffffb3]">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
