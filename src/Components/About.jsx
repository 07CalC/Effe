import { IoPerson } from "react-icons/io5";
import { BsMortarboardFill } from "react-icons/bs";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export const About = () => {    

    return (
        <section id="About">
        <div className="flex flex-col bg-[#041e35] justify-center items-center">
        <p className="lg:text-[60px] text-[40px] mt-2 font-bold underline text-white">About</p>
        <p className="mt-5 text-xl text-blue-300 w-11/12 text-center lg:w-2/3">
          The Campus Ambassador program is our effort to create an
          entrepreneurial web of college students across the country and provide
          them with ample opportunities to develop and revolutionize the
          start-up world. The selected Campus Ambassadors will work collectively
          with our team and become the face of E-Cell, IIIT Allahabad in their
          respective campuses. The program will give them the room to enhance
          their skill-set while simultaneously bringing about entrepreneurial
          advancement in their colleges.
          <br />
        </p>

        <p className="mt-16 text-xl text-blue-300 w-11/12 text-center lg:w-2/3">
          Entrepreneurship Cell, IIITA Allahabad, is a non-profit organization
          established to nurture entrepreneurial culture in IIITA, and open
          doors for our next generation innovators, entrepreneurs and
          changemakers to get out there and leave their marks on the world.
          Owing to our well-established network, we work in collaboration with
          acclaimed Venture capitalists, PE Investors, Startup firms and
          Incubation centers, to provide every out of the box proposal the
          chance and the vital means and resources to one day become the next
          ‘Big Idea’.{" "}
        </p>

        <div className="mt-16 flex items-center justify-between">
          <div className="flex flex-col lg:flex-row justify-center items-center">
          <IoPerson className="lg:w-20 lg:h-20 w-10 h-10 text-blue-300" />
          <p className="lg:ml-5 text-xl lg:text-3xl mr-10 lg:mr-96 text-white">500+ Ambassadors </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
          <BsMortarboardFill className="lg:w-20 lg:h-20 w-10 h-10 text-blue-300" />
          <p className="lg:ml-5 lg:text-3xl text-white">50+ Institutions</p>
          </div>
        </div>
        </div>
        </section>
    )
}