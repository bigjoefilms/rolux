'use client'
import React, { useState,useEffect,useMemo } from 'react';
import Header from '../component/ui/headers';
import Head from "next/head";
import Image from "next/image";
import BigNumber from "bignumber.js";
import Link from "next/link";
import { TransferRequestQR } from "../component/TransferRequestQR";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {ConnectionProvider,WalletProvider,} from "@solana/wallet-adapter-react";
import Arrow from '../component/assets/Arrow';

import {
  Connection,
  clusterApiUrl,
  PublicKey,
  Keypair,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");





const page = () => {
  const [animate, setAnimate] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [amount, setAmount] = useState<BigNumber>();
  const [verificationStatus, setVerificationStatus] = useState<boolean>(false)
  const [error, setError] = useState("");
  const [amountToString, setAmountToString] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const reference = useMemo(() => Keypair.generate().publicKey, []);
  const [isQRVisible, setIsQRVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const QUICKNODE_RPC =
    "https://few-cool-water.solana-devnet.discover.quiknode.pro/34694b75986a1c86677328b2f079135fbc1a538c/";
  const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  const handleShowQRClick = () => {
    setIsQRVisible(true);
  };


  const goToDashboard = () => {
    setDashboardVisible(true);
  };

  const goToPage = () => {
    setDashboardVisible(false);
  };
 
  const goBack = () => {
    setIsQRVisible(false);
    setVerificationStatus(false);
  };
  


  const setBack = () => {
    setVerificationStatus(false);
  };
 
  function truncate(number: any, places: any) {
    return Math.trunc(number * 10 ** places) / 10 ** places;
  }
 
  useEffect(() => {
    async function connectWallet() {
      try {
        // Initialize the selected wallet adapter (in this case, Phantom)
        const selectedWalletAdapter = wallets[0];

        // Connect to the wallet
        await selectedWalletAdapter.connect();

        // Get the wallet address
        const address = selectedWalletAdapter.publicKey?.toBase58();
        setWalletAddress(address || null);
      } catch (error) {
        setError("Error connecting to wallet:");
        console.error("Error connecting to wallet:", error);
        
      }
    }
    connectWallet();
  }, [wallets]);


  useEffect(() => {
    if (walletAddress !== null) {
      const fetchBalance = async () => {
        try {
          let newBalance = await SOLANA_CONNECTION.getBalance(
            new PublicKey(walletAddress)
          );
          newBalance = newBalance / LAMPORTS_PER_SOL;

          if (balance !== null && newBalance !== balance) {
           
            alert(`Transaction confirmed: ${newBalance}`);

           
          }
        
          setBalance(newBalance);
          console.log(`Wallet Balance: ${newBalance}`);

         
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };
     
      fetchBalance();
      const intervalId = setInterval(fetchBalance, 1000);
      return () => clearInterval(intervalId);
    }
  }, [walletAddress, balance]);

  useEffect(() => {
    // Set animate to true when the component mounts or refreshes
    setAnimate(true);

    // Set animate back to false after the animation duration to reset the animation
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Change 1000 to the duration of your animation in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (walletAddress !== null) {
      const fetchBalance = async () => {
        try {
          let newBalance = await SOLANA_CONNECTION.getBalance(
            new PublicKey(walletAddress)
          );
          newBalance = newBalance / LAMPORTS_PER_SOL;

          if (balance !== null && newBalance !== balance) {
           
            alert(`Transaction confirmed: ${newBalance}`);

           
          }
        
          setBalance(newBalance);
          console.log(`Wallet Balance: ${newBalance}`);

         
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };
     
      fetchBalance();
      const intervalId = setInterval(fetchBalance, 1000);
      return () => clearInterval(intervalId);
    }
  }, [walletAddress, balance]);
  

  useEffect(() => {
    // Set animate to true when the component mounts or refreshes
    setAnimate(true);

    // Set animate back to false after the animation duration to reset the animation
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Change 1000 to the duration of your animation in milliseconds

    return () => clearTimeout(timeout);
  }, []);
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
    <div>
      <Header/>

      <div className='flex justify-between items-center  mt-[100px] flex-col ' >
     
      
        
       
      {!dashboardVisible ?   (  <main className=" main">
      
              <div className=" text-[#eeeeee]">
              
                     
             
                {isQRVisible && (
                  <p className="flex items-center my-[10px] " onClick={goBack}>
              
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className='text-[16px] cursor-pointer'>Go Back</p>
                  </p>
                )}
                 
                  
                <h1 className=" text-[#eeeeee] font-bold text-[24px] leading-6 animate-ins my-[20px]">
                  {isQRVisible ? "Scan this To pay" : "Input Amount"}
                 
                </h1>
              </div>
            

              <div className="bg-[white] animate-in ">
                {isQRVisible && (
                  <TransferRequestQR
                    reference={reference}
                    amount={amount}
                    walletAddress={walletAddress}
                  />
                )}
              </div>

            
              <div className='mt-[30px]'>
                {isQRVisible  ? null : (
                  <div className="input">
                    <input
                      type="number"
                      id="amount"
                      className='w-[300px] h-[50px]  rounded-[8px] px-3'
                      value={amount?.toString()} // Convert BigNumber to string
                      onChange={(e) => {
                        const newValue = e.target.value;
                        setAmountToString(newValue); // Update the temporary variable
                        const parsedAmount = new BigNumber(newValue);
                        setAmount(parsedAmount); // Update the BigNumber state
                      }}
                    />
                   
                  </div>
                )}
                <div className=" ">
                 
               
                  <div className="btn">
                    {isQRVisible ? null : (
                      <button
                      
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                          marginRight: "10px",
                          color:"#eeeeee"
                        }}
                        onClick={handleShowQRClick}
                        className=" text-[#eeeeee]  bg-[#222222] h-[40px] rounded-[10px] cursor-pointer items-center flex px-3 text-[14px] mt-[25px] w-[300px] justify-center hover:bg-[#2a2a2a] animate-ins"
                      >
                        Generate Solana Pay Order
                      </button>
                    )}
                  </div>
                  <div className='text-[#eeeeee]  bg-[#222222] h-[40px] rounded-[10px] cursor-pointer items-center flex px-3 text-[14px] mt-[25px] w-[300px] justify-center hover:bg-[#2a2a2a] animate-ins'   onClick={goToDashboard}> Go to Dashboard <Arrow/> </div>

              
                
                 
                
                </div>
                <div className='mt-[20px] justify-center flex items-center'>  <WalletMultiButton /> </div>
               

         
              </div>
             
            </main>) : (
            <Dashboard goToPage={goToPage} balance={balance} />)}
       
        </div>
        
      
    </div>
    </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}

export default page
type GoToPageFunction = () => void;

 function Dashboard ({ goToPage, balance }: { goToPage: GoToPageFunction; balance: number | null }) {
  return(
    <div>
       <div className='flex justify-between items-center  flex-col  dashbaord' >
                     <h1 className='text-[#eeeeee] font-bold text-[24px] leading-6 animate-ins '>Dashboard</h1>
                     <div className='mt-[40px] flex gap-5 animate-in '>
                       <div className='max-w-[350px] w-full h-[100px] rounded-[10px] bg-[#222222] text-[#eeee] px-[30px] flex flex-col items-start justify-center'>
                        <p className='font-bold text-[24px]'>Account balance</p>
                        {balance} : sol</div>
                      
                     </div>
                     
                     
                 <div  className='text-[#eeeeee]  bg-[#222222] h-[40px] rounded-[10px] cursor-pointer items-center flex px-3 text-[14px] mt-[25px] w-[300px] justify-center hover:bg-[#2a2a2a] animate-ins' onClick={goToPage}>Scan to pay <Arrow/></div>
                
                     </div>

    </div>

  )
}