import React from "react";
import { IoMail, IoCall, IoLocation } from 'react-icons/io5'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpg";

// #c7fffa
// #81ebf2
// #ff7606

const Contact = () => {
  return (
    <div className="relative h-full min-h-screen w-full bg-white grid grid-rows-[1fr_60px]">
      <div className="h-full">
        {/* navbar */}
        <div className="sticky top-0 z-50 h-[60px] w-full bg-gradient-to-t from-[#81ebf2] to-[#c7fffa] flex items-center justify-center px-[20px]">
          <div className="h-full w-full max-w-[1200px] flex items-center justify-between">
            <div className="h-full flex items-center">
                <Image src={logo} alt="logo" className="h-full w-fit min-w-[60px]" />
            </div>
            <div className="h-full flex items-center gap-[10px] py-[10px]">
                <Link href={"/home/quizzes"}>
                    <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                    QUIZZES
                    </button>
                </Link>
                <Link href={"/home/privacy-policy"}>
                    <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                    Privacy Policy
                    </button>
                </Link>
                <button className="h-full text-sm text-[#ff7606] font-medium px-[10px] pointer-events-none duration-200 sm:text-base" >
                    Contact
                </button>
            </div>
          </div>
        </div>

        {/* quizzes */}
        <div className="h-fit w-full bg-white flex items-center justify-center p-[20px]">
          <div className="h-fit w-full max-w-[1200px] flex flex-col items-center justify-center gap-[10px]">
            <div className="h-fit w-fit max-w-[600px] p-5 rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2.5 sm:p-10">
                <Image src={logo} alt="logo" className="h-[60px] w-fit rounded-lg" />
                <p className="text-[24px] font-semibold">Contact Us</p>
                <div className="h-fit w-full grid grid-cols-[50px_1fr] items-center gap-2.5">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#ff9d02]/20 flex items-center justify-center"><IoCall size={30} color={'#ff9d02'}/></div>
                    <div>
                        <p className="font-medium">Phone:</p>
                        <a href="tel:+6585404053" className="duration-100 hover:text-[#ff9d02]">+6585404053</a> 
                    </div>
                </div>
                <div className="h-fit w-full grid grid-cols-[50px_1fr] items-center gap-2.5">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#ff9d02]/20 flex items-center justify-center"><IoMail size={30} color={'#ff9d02'}/></div>
                    <div>
                        <p className="font-medium">Email:</p>
                        <a href="mailto:info@esquiz.com" className="duration-100 hover:text-[#ff9d02]">info@esquiz.com</a> 
                    </div>
                </div>
                <div className="h-fit w-full grid grid-cols-[50px_1fr] items-center gap-2.5">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#ff9d02]/20 flex items-center justify-center"><IoLocation size={30} color={'#ff9d02'}/></div>
                    <div>
                        <p className="font-medium">Address:</p>
                        <p>160 Robinson Road, #14-04 Singapore Business Federation Center, 068914 Singapore</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="h-full w-full bg-white flex items-center justify-center px-[20px]">
        <div className="h-full w-full max-w-[1200px] flex items-center justify-center border-t border-t-gray-300">
          <p className="text-sm text-black text-center">
            Copyright © esquiz Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
