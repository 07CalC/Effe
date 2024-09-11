
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";


export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
      <div className="flex fixed flex-col w-full">
      <div className="navbar fixed w-svw align-middle items-center flex h-20 justify-between bg-[#000c1e] bg-opacity-60 border-b-2 border-blue-300">
        <div className="lg:mx-10 align-middle justify-center flex">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png" className="rounded-full w-16 h-16 mx-5 cursor-pointer" />
          <img src="https://ugc.production.linktr.ee/57b025a0-d99f-48df-a87d-b2b8ab6e88c3_AIdro-m-nX3t0-nPeFAY547oAkSWpToddibAAD7vGJw5Upanx3k-s800-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=avatar-v3_0" className="rounded-full w-16 h-16 cursor-pointer" />
        </div>
        <div className="w-3/5 hidden  mx-10 lg:flex justify-end items-end align-middle">
            <p className="font-bold text-2xl hover:text-blue-300 text-white"><Link to="#Home" className="mx-5">Home</Link></p>
            <p className="font-bold text-2xl hover:text-blue-300 text-white"><Link to="#About" className="mx-5">About</Link></p>
            <p className="font-bold text-2xl hover:text-blue-300 text-white"><Link to="#Responsibility" className="mx-5">Responsibilities</Link></p>
            <p className="font-bold text-2xl hover:text-blue-300 text-center text-white"><Link to="#" className="mx-5">Apply Now</Link></p>
            <p className="font-bold text-2xl hover:text-blue-300 text-white"><Link to="#Contact" className="mx-5">Contact</Link></p>
            
        </div>
        <div className="w-1/12 mr-5 cursor-pointer justify-end items-end lg:hidden">
        <IoMenu className="text-3xl text-white" onClick={() => setShowNav(!showNav)}/>
        </div>
        
      </div>
      <div className={`${showNav ? "" : "hidden"} mt-20 w-svw h-full mr-5  cursor-pointer bg-[#000c1e] bg-opacity-60 justify-end items-end lg:hidden`}>
          <div className="flex flex-col p-5 justify-center items-center">
          <a className="font-bold text-2xl border-b border-blue-300 hover:text-blue-300 text-white"><Link to="#Home" className="mx-5 ">Home</Link></a>
            <p className="font-bold text-2xl border-b border-blue-300 hover:text-blue-300 text-white"><Link to="#About" className="mx-5">About</Link></p>
            <p className="font-bold text-2xl border-b border-blue-300 hover:text-blue-300 text-white"><Link to="#Responsibility" className="mx-5">Responsibilities</Link></p>
            <p className="font-bold text-2xl border-b border-blue-300 hover:text-blue-300 text-center text-white"><Link to="#" className="mx-5">Apply Now</Link></p>
            <p className="font-bold text-2xl border-b border-blue-300 hover:text-blue-300 text-white"><Link to="#Contact" className="mx-5">Contact</Link></p>
          </div>
        </div>
      </div>
  );
};
