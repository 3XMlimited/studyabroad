import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaQuestionSolid } from "react-icons/lia";
import Image from "next/image";
import questions from "../public/questions.png";
import image1 from "../public/image.png";
import Link from "next/link";
const Quizzes = () => {
  const quizzes = [
    {
      name: "bitcoin",
      image: questions,
    },
    {
      name: "study abroad d sa d sa d asd sa d sa dsad as d sad",
      image: image1,
    },
    {
      name: "bitcoin",
      image: questions,
    },
    {
      name: "study abroad d sa d sa d asd sa d sa dsad as d sad",
      image: image1,
    },
    {
      name: "bitcoin",
      image: questions,
    },
    {
      name: "study abroad d sa d sa d asd sa d sa dsad as d sad",
      image: image1,
    },
    {
      name: "bitcoin",
      image: questions,
    },
    {
      name: "study abroad d sa d sa d asd sa d sa dsad as d sad dsa dsa d sa dsa dsa d sa dsa d sad sa d sad sa dsa d sa dsa d",
      image: image1,
    },
    {
      name: "bitcoin",
      image: questions,
    },
    {
      name: "study abroad d sa d sa d asd sa d sa dsad as d sad",
      image: image1,
    },
  ];

  return (
    <div className="relative h-full min-h-screen w-full bg-white grid grid-rows-[1fr_60px] overflow-y-scroll">
      <div className="h-full">
        {/* navbar */}
        <div className="sticky top-0 h-[60px] w-full bg-white flex items-center justify-center py-[10px] px-[20px] shadow-lg shadow-blue-500/10">
          <div className="h-full w-full max-w-[1200px] flex items-center justify-between">
            <Link href="/">
              <div
                className="flex items-center cursor-pointer duration-200 hover:opacity-50"
                //   onClick={() => window.alert("home")}
              >
                <LiaQuestionSolid size={30} color={"#000"} />
                <p className="text-xl text-black inline">esquiz</p>
              </div>
            </Link>
          </div>
        </div>

        {/* quizzes */}
        <div className="h-fit w-full bg-white flex items-center justify-center py-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] flex flex-col items-center gap-[10px]">
            <p className="leading-tight text-black text-2xl text-center md:text-left lg:text-[36px]">
              Take our{" "}
              <span className="leading-tight text-black text-2xl text-center font-semibold md:text-left lg:text-[36px]">
                amazing quizzes
              </span>
            </p>
            <p className="leading-tight text-black text-sm text-center mb-[20px] sm:text-base">
              Take as many quizzes as you want
            </p>
            <div className="h-fit w-full grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {quizzes.map((e, i) => (
                <div
                  className="group h-fit w-full grid grid-rows-[200px_1fr_40px] gap-[10px] bg-gray-50 shadow-md rounded-lg p-4 cursor-pointer sm:min-h-full"
                  key={i}
                  onClick={() => window.alert("clicked")}
                >
                  <div className="h-[200px] w-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={e.image}
                      alt=""
                      className="h-full object-contain"
                    />
                  </div>
                  <p className="text-lg text-black font-medium">{e.name}</p>
                  <button className="h-[40px] w-fit flex items-center gap-2 bg-blue-500 px-3 rounded-md border border-blue-500 duration-200 group-hover:bg-transparent">
                    <p className="text-white font-medium group-hover:text-blue-500">
                      Take Quiz
                    </p>
                    <FaArrowRight
                      size={16}
                      className="fill-white group-hover:fill-blue-500"
                    />
                  </button>
                </div>
              ))}
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
  );
};

export default Quizzes;
