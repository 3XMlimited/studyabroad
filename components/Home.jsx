import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaQuestionSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { PiHandWaving, PiFlowerBold, PiGraduationCap } from "react-icons/pi";
import { TfiLayoutSlider } from "react-icons/tfi";
import { BiImageAdd } from "react-icons/bi";
import { BsFolderPlus } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import questions from "../public/questions.png";
import logo from "../public/logo.jpg";

// #c7fffa
// #81ebf2
// #ff7606
// #ff9d02

const Home = () => {
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
                <button
                  className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base"
                  // onClick={() => window.alert("quizes pressed")}
                >
                  QUIZZES
                </button>
              </Link>

              <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base">
                Log In
              </button>
              <button className="h-full text-sm bg-[#ff7606] text-white font-medium rounded-full px-[10px] border-2 border-[#ff7606] duration-200 hover:text-black hover:bg-transparent hover:border-black sm:px[20px] sm:text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="h-fit w-full bg-[#81ebf2] flex items-center justify-center pt-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
            <div className="flex flex-col items-center justify-center py-[20px] gap-[10px] md:items-start">
              <p className="text-black leading-tight text-base text-center sm:text-[24px] md:text-left lg:text-[36px]">
                Our flexible{" "}
                <span className="leading-tight text-blue-700 text-base text-center sm:text-[24px] md:text-left lg:text-[36px]">
                  features
                </span>{" "}
                help you to quickly create great learning content for work,
                education or fun
              </p>
              <Link href={"/home/quizzes"}>
                <button className="group h-[40px] bg-[#ff7606] rounded-full flex items-center gap-[5px] px-[20px] border-2 border-[#ff7606] duration-200 hover:bg-transparent hover:border-black sm:h-[50px]">
                  <p className="text-sm font-medium text-white duration-200 group-hover:text-black sm:text-base">
                    Get started for free
                  </p>
                  <FaArrowRight size={16} className="fill-white duration-200 group-hover:fill-black" />
                </button>
              </Link>
            </div>

            <div className="h-full w-full flex items-end">
              <Image src={questions} alt="questions" className="w-full" />
            </div>
          </div>
        </div>

        {/* features section */}
        <div className="h-fit w-full bg-white flex items-center justify-center py-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] flex flex-col items-center gap-[10px]">
            <p className="leading-tight text-black text-base text-center sm:text-[24px] md:text-left lg:text-[36px]">
              Easily create{" "}
              <span className="leading-tight text-black text-base text-center font-semibold sm:text-[24px] md:text-left lg:text-[36px]">
                amazing learning materials
              </span>
            </p>
            <p className="leading-tight text-black text-sm text-center mb-[20px] sm:text-base">
              Our interface is simple and easy to use: no coding required.
            </p>
            <div className="h-fit w-full grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <LiaQuestionSolid size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">
                  Classic quizzes
                </p>
                <p className="text-base text-black font-normal">
                  Make any quiz for users to take at their own pace
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <LiaMicrophoneAltSolid size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">Live quizzes</p>
                <p className="text-base text-black font-normal">
                  Connect to your students in real-time using live quiz games
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <PiGraduationCap size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">Courses</p>
                <p className="text-base text-black font-normal">
                  Everything you need to build a course with varied lessons
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <PiHandWaving size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">Welcome page</p>
                <p className="text-base text-black font-normal">
                  Add a welcome page to introduce people to your content
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <TfiLayoutSlider size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">Info slides</p>
                <p className="text-base text-black font-normal">
                  Add information between questions such as text, audio or
                  videos
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <BiImageAdd size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">Add media</p>
                <p className="text-base text-black font-normal">
                  Add images, videos, gifs or audio to any page or question type
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <BsFolderPlus size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">
                  Add documents
                </p>
                <p className="text-base text-black font-normal">
                  Share downloadable files such as PDFs, Word or Excel documents
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-[#ff9d02]/10 border border-[#ff9d02] rounded-lg flex items-center justify-center">
                  <PiFlowerBold size={40} className="fill-[#ff9d02]" />
                </div>
                <p className="text-xl text-black font-semibold">
                  Thank you page
                </p>
                <p className="text-base text-black font-normal">
                  Finish your quiz with an end page to share more information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="h-full w-full bg-white flex items-center justify-center px-[20px]">
        <div className="h-full w-full max-w-[1200px] flex items-center justify-center border-t border-t-gray-300">
          <p className="text-sm text-black text-center">
            Copyright © esquiz Pty Ltd
          </p>
        </div>
      </div>
    </div>
  )
};

export default Home;