import{useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import hero from "../assets/hero.png"
import Hero from "../containers/hero"
//import Join from "../containers/Join";
function Navbar() {
    const[nav,setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav);
      };

  return (
    <>
    <section className="bg-white mx-auto pointer-events-auto " id="footer">
       
        <img src={hero} className="h-screen object-cover pointer-events-none float-right ml-[62.2rem]  inset-0" alt="" />
        <div className="absolute">
       <nav className="md:fixed  flex mx-auto justify-between items-center py-[39px] px-[103px]" >
        <h1 className="md:text-[30px] text-black font-bold">InsureSafe</h1>
        
        <ul className='hidden md:flex xl:ml-[26rem] font-medium cursor-pointer'>
        <li className='p-3 text-[18px]  text-black '>Home</li>
        <li className='p-3 text-[18px] text-black'>Company</li>
        <li className='p-3 text-[18px] text-black'>Resources</li>
        <li className='p-3 text-[18px] text-black'>About</li>
        <li className='p-3 text-[18px] text-black'>Contact</li>
      </ul>
          
        <button className="hidden md:flex rounded-md  font-bold py-2 px-4 2xl:ml-[35rem]  bg-white box-border  text-black">Claim Now</button>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r  bg-[#ceced1] ease-in-out duration-500' : 'transition-all  ease-in-out duration-400 fixed left-[-100%]'}>
        <h1 className='w-full text-[30px] font-bold text-black m-4'>InsureSafe</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
          <button className="rounded  font-bold py-2 px-4 bg-blue-500 text-white">Claim Now</button>
      </ul>
      </nav>
      <Hero/>
      </div>
     
      </section>
    </>
  )
}

export default Navbar
