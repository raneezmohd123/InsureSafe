import {LiaInstagram} from "react-icons/lia"
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className="bg-white ">
    <div className="w-full mx-auto max-w-screen-xl mt-10">
        <div className="flex justify-center gap-3 items-center">
       <a href="#" ><LiaInstagram size={60}/></a> 
       <a href="#"><FaXTwitter size={60}/></a> 
       <a href="#"><FaWhatsapp size={60}/></a> 
        </div>
        <div className="flex justify-center mt-10">
            <ul className="flex gap-4 font-normal text-2xl">
                <li>
                    <a href="#footer">Home</a>
                </li>
                <li>
                    <a href="#">Join</a>
                </li>
                <li>
                    <a href="#about_us">About Us</a>
                </li>
                <li>
                    <a href="#contact_us">Contact Us</a>
                </li>
                <li>
                    <a href="#">Our Team</a>
                </li>
            </ul>
        </div>
        
    </div>
    <div className=" bg-gray-900  w-full h-[40px] mt-5 font-normal text-sm">
        <p className="block pt-4 text-center text-white">© Copyright 2023 All Rights Reserved by InsureSafe </p>
        </div>
    </footer>
    </>
  )
}

export default Footer
