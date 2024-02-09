import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = ({ query }) => ({
  props: query,
});

const page = ({ country }) => {
  let pathname = usePathname();
  const [fb, setFb] = useState({});
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [finish, setFinish] = useState(false);
  country = decodeURIComponent(country);

  const fetchHeadline = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/fb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pathname?.split("/")[2]),
      });
      const data = await response.json();
      // console.log(data);
      setFb(data.result);
    } catch (error) {
      setFb({});
    }
    await fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/ads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pathname?.split("/")[2]),
      });
      const result = await response.json();
      console.log("result", result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmail = async () => {
    setErrorMsg(null);
    setIsLoading(true);
    if (email !== null && email.length > 0) {
      try {
        const response = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            topic: data.tags,
            id: data.forms,
            name: "",
            country,
            beehiiv: data.beehiiv,
          }),
        });
        const result = await response.json();

        console.log("result", result);
        setFinish(true);
      } catch (error) {
        console.log(error);
      }
      window.open("/thankyou");
    } else {
      setErrorMsg("Invalid email");
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchHeadline();
  }, [pathname]);

  return (
    <div className="text-black ids_text bg-white h-screen  overflow-y-scroll relative ">
      {/* Loading */}

      {/* header */}
      <div className="flex justify-center  items-end shadow-md max-h-[100px] relative   bg-gradient-to-t from-[#81ebf2] to-[#c7fffa]  ">
        <div className="w-[95vw] m-auto flex md:justify-center justify-start  py-0 px-[15px]">
          <div className="flex justify-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center my-2">
                <Image src={"/logo.jpg"} width={50} height={50} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container ">
        {isLoading ? (
          <div className="absolute top-[50%] md:left-[40%] left-[30%]">
            <Loading text={"Loading..."} />
          </div>
        ) : (
          <div className="flex justify-center  my-[40px] p-[15px]  ">
            <div className="  text-black divide-y divide-black ">
              {/* title */}
              <div className="flex justify-center pb-[25px]">
                <h1 className="font-bold md:text-[40px] text-[24px] md:text-center text-left">
                  {data?.headline ? data?.headline : fb?.name}
                </h1>
              </div>
              {/* form */}
              <div className="relative w-[100%] h-[300px]  flex flex-col justify-center items-center ">
                <div className="w-[100%] flex justify-between items-center px-10 ">
                  <Image src="/logo.jpg" width={50} height={50} alt="logo" />
                  <h1 className="font-bold items-center text-[35px] ">
                    ESQUIZ
                  </h1>
                </div>
                <div className="py-[15px] font-normal whitespace-normal text-center">
                  <p>
                    Subscribe to Esquiz newsletter. Join our +100,000 community
                    for the latest trends.
                  </p>
                </div>
                {errorMsg && (
                  <p className="text-red-500 pl-4  w-[100%]">
                    Invalid Email !!
                  </p>
                )}
                <input
                  className={`w-[100%] h-[60px] border-2 ${
                    !finish ? "border-[#F6CD77]" : "border-[#81ebf2]"
                  }  rounded-md pl-8 py-2 shadow-md font-semibold focus:ring-0 ring-0 outline-none bg-white`}
                  value={email}
                  placeholder="Enter your email "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={`${
                    !finish ? "bg-[#F6CD77]" : "bg-[#81ebf2]"
                  } px-6 md:pl-8 py-4  md:absolute md:right-0.5   md:top-[174.5px]  font-bold block mt-2 w-[100%] rounded-md md:w-[20%] md:flex md:mt-0 md:rounded-none  `}
                  onClick={fetchEmail}
                  disabled={finish}
                >
                  {finish ? "Thank you" : " Subscribe"}
                </button>
              </div>

              {/* content */}
              <div
                className="py-[25px]"
                dangerouslySetInnerHTML={{
                  __html: `<div id="buttonLink">${data?.content}</div>`,
                }}
              />
              {/* <div className="py-[25px] font-semibold whitespace-normal ">
                <p> {data?.content}</p>
              </div> */}

              {/* domain */}
              <div className="pt-[25px]">
                {data?.domains?.map((d, i) => (
                  <a
                    href={data?.domains_url[i]}
                    target="_blank"
                    className="bg-[#F6CD77] hover:bg-blue-400 flex justify-between p-4 border-4 border-black rounded-xl my-4"
                  >
                    <div className="flex gap-2 items-center mt-0.5">
                      🔍
                      <p className="font-black text-xl">{d}</p>
                    </div>
                    <p className="text-blue-500 font-black text-xl">{">"}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* footer section */}
        {!isLoading && (
          <div className="h-full w-full bg-white flex items-center justify-center px-[20px]">
            <div className="h-full w-full max-w-[1200px] flex flex-col items-center justify-center border-t border-t-gray-300 divide-y-2 space-y-10">
              <p className="text-sm text-black text-center mt-[35px]">
                2024 © esquiz All rights reserved
              </p>
              <div className="  text-[10px]">
                <p className="md:text-[20px] text-[14px] font-semibold  mt-[10px]">
                  Disclaimer
                </p>
                <p>
                  The information provided on this website is for general
                  informational purposes only and is not a substitute for
                  professional advice. Please seek professional advice before
                  following any tips or recommendations. The website does not
                  endorse or promote any specific product or service mentioned
                  on the site, and any product or service reviews are public
                  information and personal opinions of the author(s) and / or
                  contributors. By using this website, you acknowledge and
                  accept the above disclaimer. For more information.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
