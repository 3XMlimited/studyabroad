import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaQuestionSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      
      await fetch(`https://thewordartisan.online/api/v1/template`)
        .then(response => response.json())
        .then(response => {
          const obj = response.data
          if (obj) {
            const images = Array.from(new Set(obj.map(e => e?.image)))
            const fin = images.map(e => { return obj.find(f => f?.image === e) })
            setQuizzes(fin.map(e => { return { topic: e?.topic, headline: e?.headline, image: e?.image } }))
            // setQuizzes(obj.map(e => { return { topic: e?.topic, headline: e?.headline, image: e?.image } }))
          } else {
            setQuizzes()
          }
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }

    getData()
  }, [])

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
            {loading ? (
              Loading({ text: 'Loading' })
            ) : (
              <div className="h-fit w-full grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {quizzes.map((e, i) => (
                  <Link href={`/${e?.topic}`} target="_blank" key={i}>
                    <div
                      className="group h-fit w-full grid grid-rows-[200px_1fr_40px] gap-[10px] bg-gray-50 shadow-md rounded-lg p-4 cursor-pointer sm:min-h-full"
                    >
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
            Copyright © esquiz Pty Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
