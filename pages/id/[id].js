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
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);
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
      // console.log("result", result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(country);
  const fetchEmail = async () => {
    setIsLoading(true);

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
        }),
      });
      const result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchHeadline();
  }, [pathname]);

  return (
    <div className="text-black ids_text bg-white h-screen  overflow-y-scroll ">
      {/* Loading */}

      {/* header */}
      <div className="flex justify-center items-end shadow-md max-h-[100px] relative">
        <div className="w-[95vw] m-auto flex justify-center  py-0 px-[15px]">
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
                <h1 className="font-bold md:text-[40px] text-[20px]">
                  {fb?.name}
                </h1>
              </div>
              {/* form */}
              <div className="relative w-[100%] h-[200px] bg-black flex justify-center items-center rounded-md">
                <input
                  className="md:w-[80%] w-[90%] h-[60px]  rounded-md pl-8 py-2 shadow-md font-semibold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[#F6CD77] px-4 py-2 rounded-md absolute md:right-20 right-5 font-bold"
                  onClick={fetchEmail}
                >
                  Send
                </button>
              </div>
              {/* content */}
              <div className="py-[25px] font-semibold whitespace-normal">
                <p> {data?.content}</p>
              </div>

              {/* domain */}
              <div className="pt-[25px]">
                {data?.domains?.map((d, i) => (
                  <Link
                    href={data?.domains_url[i]}
                    className="bg-[#F6CD77] hover:bg-blue-400 flex justify-between p-4 border-4 border-black rounded-xl my-4"
                  >
                    <div className="flex gap-2 items-center mt-0.5">
                      🔍
                      <p className="font-black text-xl">{d}</p>
                    </div>
                    <p className="text-blue-500 font-black text-xl">{">"}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="flex justify-center mt-32">
        <p className="text-[48px] leading-4 font-semibold"> {fb?.name}</p>
      </div> */}
    </div>
  );
};

export default page;
