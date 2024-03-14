import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaQuestionSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import logo from "../public/logo.jpg";

// #c7fffa
// #81ebf2
// #ff7606

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      await fetch(
        `https://4urm3w6a18.execute-api.ap-east-1.amazonaws.com/prod/api/v1/template`
      )
        .then((response) => response.json())
        .then((response) => {
          const obj = response.data;
          if (obj) {
            const fin = obj.filter((f) => f?.state === true);
            setQuizzes(
              fin.map((e) => {
                return {
                  topic: e?.topic,
                  headline: e?.headline,
                  image: e?.image,
                };
              })
            );
          } else {
            setQuizzes();
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    };

    getData();
  }, []);

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
              <button className="h-full text-sm text-[#ff7606] font-medium px-[10px] pointer-events-none duration-200 sm:text-base" >
                QUIZZES
              </button>
              <Link href={"/home/privacy-policy"}>
                <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                  Privacy Policy
                </button>
              </Link>
              <Link href={"/home/contact"}>
                <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                  Contact
                </button>
              </Link>
            </div>
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
            {loading ? (
              Loading({ text: "Loading" })
            ) : (
              <div className="h-fit w-full grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {quizzes.map((e, i) => (
                  <Link href={`/${e?.topic}`} target="_blank" key={i}>
                    <div className="group h-fit w-full grid grid-rows-[200px_1fr_40px] gap-[10px] bg-gray-50 shadow-md rounded-lg p-4 cursor-pointer sm:min-h-full">
                      <div className="relative h-[200px] w-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                          src={e?.image}
                          alt=""
                          fill={true}
                          objectFit="cover"
                        />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<div id="quizzes-page-headline">${e?.headline}</div>`,
                        }}
                      />
                      <button className="h-[40px] w-fit flex items-center gap-2 bg-[#ff7606] px-3 rounded-md border-2 border-[#ff7606] duration-200 group-hover:bg-transparent">
                        <p className="text-white font-medium group-hover:text-[#ff7606]">
                          Take Quiz
                        </p>
                        <FaArrowRight
                          size={16}
                          className="fill-white group-hover:fill-[#ff7606]"
                        />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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

export default Quizzes;
