import{useState} from "react";
import PropTypes from "prop-types"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import CryptoCard from "../../components/CryptoCard";
import Logo from "../../assets/Logo.png"
import { Link} from "react-scroll";
//import{useNavigate} from "react-router-dom"


const OptionComponent = ({option}) => {
  // Render your component based on the selected option
 
  switch (option.label) {
    case 'CUSTOMER':
      return <CryptoCard data={{title:'CUSTOMER'}}/>;
    case 'PROVIDER':
      return <CryptoCard data={{title:"PROVIDER"}} />;
    case 'POLICE':
      return <CryptoCard data={{title:"POLICE"}} />;
    case 'GARAGE':
        return <CryptoCard data={{title:"GARAGE"}} />;  
    // Add more cases for additional options
    default:
      return null; // Render nothing if no option matches
  }
};
OptionComponent.propTypes={
option:PropTypes.object.isRequired
}

function Navbar() {
 
    const[nav,setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav);
      };
 //dropdown
      const [selectedOption, setSelectedOption] = useState(null);
      const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        const handleOptionClick = (option) => {
          setSelectedOption(option);
          setIsOpen(false); // Close dropdown after selecting an option
        };
      
        const options = [
          { label: 'CUSTOMER', component: <CryptoCard/> },
          { label: 'POVIDER' ,component:<CryptoCard/>},
          { label: 'POLICE' },
          { label: 'GARAGE' },
          // Add more options and their corresponding components as needed
        ];

  return (
    <>
    <section className=" mx-auto pointer-events-auto " id="navbar">
    <img src={Logo} alt="" className="fixed w-[38px] h-[30px] mt-[33px] ml-[59px]"/>
       <nav className="fixed w-full flex mx-auto justify-between items-center py-[25px] px-[100px]" >
       <Link to="navbar" spy={true} smooth={true} offset={-500} duration={500}>
        <h1 className="md:text-[30px] text-white font-bold cursor-pointer">InsureSafe</h1></Link>
        
        <ul className='hidden md:flex xl:ml-[26rem] font-medium cursor-pointer'>
        <Link to="navbar" spy={true} smooth={true} offset={-500} duration={500}>
        <li className='p-3 text-[18px]  text-white '>Home</li></Link>
        <Link to="join" spy={true} smooth={true} offset={-200} duration={300} >
        <li className='p-3 text-[18px] text-white'>Join</li></Link>
        <Link to="" smooth={true} offset={200} duration={300}> 
        <li className='p-3 text-[18px] text-white'>Resources</li> </Link>
        <Link to="about_us" smooth={true} offset={200} duration={300}>
           <li className='p-3 text-[18px] text-white'>About</li></Link>
           <Link to="contact_us" smooth={true} offset={200} duration={300}>
        <li className='p-3 text-[18px] text-white'>Contact</li></Link>
      </ul>
        
        <button className="hidden md:flex rounded-md  font-bold py-2 px-4 2xl:ml-[35rem]  bg-[#6739E4] box-border  text-white" onClick={toggleDropdown} 
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        >Claim Now</button>
        {isOpen && (
        <div
          className="origin-bottom-right absolute top-[4rem] right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option,)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedOption && <OptionComponent option={selectedOption} />}
         
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r  bg-[#ceced1] ease-in-out duration-500' : 'transition-all  ease-in-out duration-400 fixed left-[-100%]'}>
        <h1 className='w-full text-[30px] font-bold text-white m-4'>InsureSafe</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
          <button className="rounded  font-bold py-2 px-4 bg-blue-500 text-white">Claim Now</button>
      </ul>
      </nav>
      
      {/* <img src={hero} className="h-screen object-cover pointer-events-none inset-0 ml-[62.2rem]" alt="" /> */}
      </section>
      
    </>
  )
}
Navbar.propTypes={
  data:PropTypes.string.isRequired,
  

};
export default Navbar
