"use client";
import React, { useContext, useState } from "react";
import a from "../public/a.png";
import Image from "next/image";
import { Jost } from "next/font/google";
import { IoMdArrowBack } from "react-icons/io";
import AppContext from "@/context/Context";
// import FACEBOOK_PIXEL_2 from "../components/pixel-2";
const jost = Jost({ subsets: ["latin"] });

const allQuestions = [
  "Do you want to study in a country where English is the primary language spoken ?",
  `Is studying in a big city important to you ?`,
  `Do you want to study at a university with a prestigious reputation for academics ?`,
  `Do you prefer universities with a wide range of academic disciplines ?`,
  `Is improving your language skills a priority in your study abroad program ?`,
  `Are you open to studying in a country where English is not the primary language? `,
  `Are you open to learning about different customs and traditions ?`,
  `Are you excited about experiencing festivals and events unique to other countries ?`,
  `Is cost an important factor for you when choosing a study abroad program ?`,
  `Are you willing to take on part-time work to supplement your study abroad budget ?`,
  `Are you open to exploring scholarship opportunities to help fund your study abroad experience ?`,
  `Did you know that some Universities in Europe and the USA offer the opportunity to Study for Free ?`,
];

const Questions = () => {
  const funvar = useContext(AppContext);
  const { answeredCount, getAnswer, totalQuestions, goBack } = funvar;
  const completionPercentage = ((answeredCount / totalQuestions) * 100).toFixed(
    2
  );

  return (
    <div className="bg-black min-h-screen h-full w-full min-w-full">
      {/* <FACEBOOK_PIXEL_2 /> */}
      <div className="mx-2 lg:mx-auto justify-center align-middle my-auto">
        <div
          className={`lg:w-[50vw] flex flex-col justify-center mx-auto py-auto h-full align-middle content-center`}
        >
          <Image height={"4rem"} width={"4rem"} src={a} alt="Hat" />
          {answeredCount > 0 && (
            <button
              onClick={goBack}
              className={`text-white ${jost.className}  relative lg:right-96 right-40 md:right-96`}
            >
              <div className="flex justify-center content-center align-middle">
                <IoMdArrowBack
                  className="inline "
                  size={"1.2rem"}
                  color="white"
                />
                <span className="text-xl relative bottom-1 left-3 text-white">
                  Back
                </span>
              </div>
            </button>
          )}
          <h1
            style={{ fontSize: "2rem" }}
            className={`text-white ${jost.className} mt-5`}
          >
            {allQuestions[answeredCount]}
          </h1>
          <div className="flex align-middle h-full w-full mt-5">
            <button
              onClick={() => {
                getAnswer("Yes");
              }}
              className="hover:bg-cyan-700 mx-2 px-16 bg-cyan-500 text-white font-bold py-2 rounded"
            >
              <p>Yes</p>
            </button>
            <button
              onClick={() => {
                getAnswer("No");
              }}
              className="hover:bg-cyan-700 mx-2 px-16 bg-cyan-500 text-white font-bold py-2 rounded"
            >
              No
            </button>
          </div>
          <div className="mt-5 absolute left-24 md:left-40 lg:left-auto flex flex-col bottom-3 justify-center w-[50vw] mx-auto align-middle content-center ">
            <p className="text-white">{`${completionPercentage}% Completed`}</p>
            <div className="bg-gray-300 h-4 w-full rounded-md">
              <div
                className="bg-cyan-500 h-4 rounded-md"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
