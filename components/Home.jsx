import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaQuestionSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { PiHandWaving, PiFlowerBold, PiGraduationCap } from "react-icons/pi";
import { TfiLayoutSlider } from "react-icons/tfi";
import { BiImageAdd } from "react-icons/bi";
import { BsFolderPlus } from "react-icons/bs";
import Image from "next/image";
import questions from "../public/questions.png";

const Home = () => {
  return (
    <div className="relative h-full w-full grid grid-rows-[1fr_60px] overflow-y-scroll">
      <div>
        {/* navbar */}
        <div className="sticky top-0 h-[60px] w-full bg-white flex items-center justify-center py-[10px] px-[20px] shadow-lg shadow-blue-500/10">
          <div className="h-full w-full max-w-[1200px] flex items-center justify-between">
            <div className="flex items-center">
              <LiaQuestionSolid size={30} />
              <p className="text-xl mobileSM:hidden">esquiz</p>
            </div>
            <div className="h-full flex items-center gap-[10px]">
              <button className="h-full text-base text-black font-semibold px-[20px] duration-200 hover:text-blue-500 tabletMD:px-[10px] tabletMD:text-sm">
                Log In
              </button>
              <button className="h-full text-base bg-blue-500 text-white rounded-full px-[20px] border border-blue-500 duration-200 hover:text-black hover:bg-white hover:border-black tabletMD:px[10px] tabletMD:text-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="h-fit w-full bg-[#0f1048] flex items-center justify-center pt-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] grid grid-cols-2 gap-[20px] tabletLG:grid-cols-1">
            <div className="flex flex-col items-start justify-center py-[20px] singleXL:gap-[10px] tabletLG:items-center">
              <p className="text-white text-[36px] singleXL:text-[24px] tabletLG:text-center mobileSM:text-base">
                Our flexible{" "}
                <span className="text-yellow-500 text-[36px] singleXL:text-[24px] mobileSM:text-base">
                  features
                </span>{" "}
                help you to quickly create great learning content for work,
                education or fun
              </p>
              <button className="h-[50px] bg-blue-500 text-white rounded-full flex items-center gap-[5px] px-[20px] border border-blue-500 duration-200 hover:bg-transparent hover:border-white mobileSM:h-[40px]">
                <p className="text-base mobileSM:text-sm">
                  Get started for free
                </p>
                <FaArrowRight size={16} />
              </button>
            </div>

            <div className="h-full w-full flex items-end">
              <Image src={questions} alt="questions" className="w-full" />
            </div>
          </div>
        </div>

        {/* features section */}
        <div className="h-fit w-full bg-white flex items-center justify-center py-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] flex flex-col items-center gap-[20px]">
            <p className="text-[36px] singleXL:text-[24px] tabletLG:text-center mobileSM:text-base">
              Easily create{" "}
              <span className="text-[36px] font-semibold singleXL:text-[24px] tabletLG:text-center mobileSM:text-base">
                amazing learning materials
              </span>
            </p>
            <p className="text-base text-center mb-[20px] mobileSM:text-sm">
              Our interface is simple and easy to use: no coding required.
            </p>
            <div className="h-fit w-full grid grid-cols-4 gap-[20px] singleXL:grid-cols-3 tabletLG:grid-cols-2 tabletMD:grid-cols-1">
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <LiaQuestionSolid size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Classic quizzes</p>
                <p className="text-base font-normal">
                  Make any quiz for users to take at their own pace
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <LiaMicrophoneAltSolid size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Live quizzes</p>
                <p className="text-base font-normal">
                  Connect to your students in real-time using live quiz games
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <PiGraduationCap size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Courses</p>
                <p className="text-base font-normal">
                  Everything you need to build a course with varied lessons
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <PiHandWaving size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Welcome page</p>
                <p className="text-base font-normal">
                  Add a welcome page to introduce people to your content
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <TfiLayoutSlider size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Info slides</p>
                <p className="text-base font-normal">
                  Add information between questions such as text, audio or
                  videos
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <BiImageAdd size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Add media</p>
                <p className="text-base font-normal">
                  Add images, videos, gifs or audio to any page or question type
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <BsFolderPlus size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Add documents</p>
                <p className="text-base font-normal">
                  Share downloadable files such as PDFs, Word or Excel documents
                </p>
              </div>
              <div className="h-fit w-full flex flex-col items-start gap-[10px]">
                <div className="h-[60px] w-[60px] bg-sky-100 border border-sky-400 rounded-lg flex items-center justify-center">
                  <PiFlowerBold size={40} className="fill-sky-400" />
                </div>
                <p className="text-xl font-semibold">Thank you page</p>
                <p className="text-base font-normal">
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
          <p className="text-sm text-center">Copyright © esquiz Pty Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
