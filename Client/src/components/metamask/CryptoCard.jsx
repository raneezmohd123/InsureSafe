import React from "react";
import PropTypes from "prop-types"
import { useState,useEffect} from "react";
import metamask from "../../assets/MetaMask_Fox.svg.png"
import "./dashboard.css";
import {ethers} from "ethers"

const buttonClasses = "flex items-center p-2 bg-zinc-700 rounded-lg w-full";
const imageClasses = "mr-2 w-[30px]" ;

function CryptoCard({data,children}) {
    const[isOpen,setIsOpen]=useState(true)
    const[account,setAccount]=useState(null);
    
    useEffect(() => {
        connectToMetaMask();
      }, []);

    //Function to connect to MetaMask
  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed and available
      if (window.ethereum&& window.ethereum.isMetaMask) {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get the provider from MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer (current account)
        const signer = provider.getSigner();
        // Get the current account address
        const address = await signer.getAddress();
        setAccount(address);
        // Redirect to the dashboard with the account address
        window.location.href = `/dashboard?address=${address}`;
      } else {
        console.log('MetaMask not installed');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
    return null;
  };

   const close = () => {
        setIsOpen(false);
      };
     
    
  return (
    <>
    

       {isOpen&&(
        <div className=" bg-zinc-800 text-white w-[22rem] p-4  rounded-md top-0 right-1 h-[100%]  `ease-in-out duration-500' : 'transition-all  ease-in-out duration-400 fixed `">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-[50px] font-extrabold opacity-20">{data.title}</h1>
                <h1 className="absolute mt-7 text-lg font-semibold">Connect a wallet</h1>
                <button className="text-zinc-400 hover:text-white" onClick={close}>
                    <svg src="" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <ul>
                <li className="mb-4">
                    <button className={buttonClasses}  >
                        <img src={metamask}  alt="MetaMask" className={imageClasses} onClick={connectToMetaMask} />
                        MetaMask
                    </button>
                    {React.Children.map(children, child =>
         React.cloneElement(child, { account })
      )}
                </li>
                <li className="mb-4">
                <button className={buttonClasses}>
                        <img src={metamask} alt="Uniswap Wallet" className={imageClasses} />
                        Uniswap Wallet
                    </button>
                </li>
                <li className="mb-4">
                    <button className={buttonClasses}>
                        <img src={metamask} alt="WalletConnect" className={imageClasses} />
                        WalletConnect
                    </button>
                </li>
                <li className="mb-4">
                    <button className={buttonClasses}>
                        <img src={metamask} alt="Coinbase Wallet" className={imageClasses} />
                        Coinbase Wallet
                    </button>
                </li>
            </ul>
            <p className="text-zinc-400 text-xs  mt-[38rem]">
                By connecting a wallet, you agree to Uniswap Labs, Terms of Service and consent to its Privacy Policy.
            </p>
        </div>
        )}
        </>
  )
}
CryptoCard.propTypes={
    data:PropTypes.object.isRequired,
    children:PropTypes.object.isRequired
  };
export default CryptoCard;






