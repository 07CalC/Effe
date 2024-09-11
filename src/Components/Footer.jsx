import { IoPerson } from "react-icons/io5";
import { BsMortarboardFill } from "react-icons/bs";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col max-w-svw">
      
      <div className="flex flex-col bg-[#041e35] justify-center items-center">
        <div className="w-full flex flex-col  mt-28 bg-[#000c1e] border-t-2 border-blue-300 p-10 justify-center items-center">
          <p className="text-center text-[20px] lg:text-[30px] font-bold text-blue-300">
            Effervescence, IIIT Allahabad
          </p>
          <div className="flex justify-center items-center mt-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/goeffervescence/?hl=en"
            >
              <FaInstagram className="hover:scale-105 mx-5 text-[30px] lg:text-[60px] text-blue-300" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/effe.iiita/"
            >
              <FaLinkedin className="hover:scale-105 mx-5 text-[30px] lg:text-[60px] text-blue-300" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@effervescence_23"
            >
              <FaYoutube className="hover:scale-105 mx-5 text-[30px] lg:text-[60px] text-blue-300" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/effervescence.iiita/"
            >
              <FaFacebook className="hover:scale-105 mx-5 text-[30px] lg:text-[60px] text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
