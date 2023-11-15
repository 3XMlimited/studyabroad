import Image from "next/image";
import React from "react";
import a from "../public/a.png";
import * as echarts from "echarts";
import { useEffect, useState } from "react";
import AppContext from "@/context/Context";
import { useContext } from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Jost } from "next/font/google";
import Link from "next/link";
const jost = Jost({ subsets: ["latin"] });

const results = () => {
  const router = useRouter();
  const funvar = useContext(AppContext);
  const { budget, cult, language, academic, location, answers } = funvar;
  const [radius, setRadius] = useState(["30%", "50%"]);

  const [data, setData] = useState(null);

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("data") || "";

    if (value) {
      value = JSON.parse(value);
      value = value.data;

      let questionsList = [];
      value?.question_list?.map((r) => {
        questionsList.push(r.value.question);
      });
      let charts = [];

      value?.question_list.map((r, i) => {
        if (answers[i] === "Yes") {
          if (charts && charts.map((l, i) => l.name).includes(r.category)) {
            console.log(charts);
            let index = charts
              .map((l, i) => l.name)
              .findIndex((l) => l === r.category);

            charts[index].value = charts[index].value + r.value.score;
          } else {
            charts.push({
              name: r.category,
              value: r.value.score,
            });
          }
        }
      });
      if (value) {
        value.chart = charts;

        value.allQuestions = questionsList;

        setData(value);
      }
    }
    // }
    // else {
    // router.push("/");
    // }
  }, []);
  useEffect(() => {
    console.log("ansers", answers);
    if (answers[0] === null || answers === 0) {
      console.log("back");

      let value;
      // Get the value from local storage if it exists

      value = localStorage.getItem("data") || "";
      value = JSON.parse(value);
      value = value.data;
      if (value && value.topic) {
        console.log(value?.topic);
        router.push(`/${value?.topic}`);
      } else {
        router.push(`/`);
      }
    }
  }, []);

  useEffect(() => {
    const chartDom = document.getElementById("echarts-container");
    const myChart = echarts.init(chartDom);
    if (typeof window !== "undefined") {
      // Access window only on the client side
      if (window.innerWidth > 1024) {
        // Use different radius values for smaller screens
        setRadius(["40%", "70%"]);
      }
    }

    let option = {
      title: {
        text: "Your Overall Score",
        // subtext: `${(location + academic + language + budget + cult) * 10}%`, // Calculate the overall score
        subtext: `${Math.min(
          // (location + academic + language + budget + cult) * 10,
          data?.chart?.reduce((a, b) => a + b.value, 0) * 10,
          100
        )}%`,
        left: "center",
        top: "center",
        textStyle: {
          color: "#fff", // Set the text color
          fontSize: "0.8rem", // Adjust the font size as needed
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        show: false, // Set this to false to hide the legend
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          // name: 'Access From',
          type: "pie",
          radius: radius,
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 5,
            borderColor: "#000",
            borderWidth: 1,
          },
          label: {
            show: true,
            position: "outside", // Set this to 'outside' to display names outside the chart
            fontSize: 12,
            fontWeight: "bold",
            color: "white",
          },
          labelLine: {
            show: true, // Set this to true to show lines connecting names to the chart
            length: 9, // You can adjust the length of the lines as needed
          },
          // data: data?.chart,
          data: data?.chart,
          // data: [
          //   { value: budget, name: "Budget1" },
          //   { value: location, name: "Location" },
          //   { value: academic, name: "Academics" },
          //   { value: language, name: "Language" },
          //   { value: cult, name: "Culture" },
          // ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);
  console.log(data);
  return (
    <div className="bg-black align-middle  lg:mx-auto min-h-screen h-full w-full min-w-full flex flex-col  text-white">
      <div className="h-full w-full min-w-full flex lg:flex-row flex-col mx-auto  text-white">
        <div className="lg:ml-20 lg:w-[40vw] flex flex-row lg:flex-col justify-center align-middle content-center">
          <div className="mx-4">
            <Image src={data?.logo} alt="Logo" width={200} height={200} />
            <h1 className={`${jost.className}`} style={{ fontSize: "2.1rem" }}>
              Congratulations on Completing the Quiz!
            </h1>
            <p className={`${jost.className} my-2`}>
              Your full report has been been generated
            </p>
            <p className={`${jost.className}`}>{data?.thankyou_content}</p>
          </div>
        </div>
        <div className="lg:w-[50vw] ml-10 lg:relative flex flex-col justify-center align-middle content-center">
          <div
            id="echarts-container"
            className="lg:h-[700px] h-[350px] w-[100%] lg:w-[100%] "
          />
        </div>
      </div>
      <div className="lg:mx-auto mx-4 flex flex-row my-14 justify-center align-middle content-center w-full">
        <div className=" mx-auto flex flex-col justify-center align-middle content-center text-center ">
          <div className="w-full   flex justify-center ">
            <h1
              className={`text-white mt-10   max-w-[1000px]`}
              style={{ fontSize: "1.5rem" }}
            >
              {/* Did you know that Universities in Europe and the USA offer the
              opportunity to Study for Free? */}
              {data?.question_for_link}
              {/* ?.split(" ")
                .slice(0, data?.question_for_link?.split(" ").length - 5)
                .toString()
                .replaceAll(",", " ")} */}
            </h1>
          </div>
          {/* <div className="w-full  flex justify-center">
            <h1 className={`text-white `} style={{ fontSize: "1.5rem" }}>
              {data?.question_for_link
              ?.split(" ")
                .slice(
                  data?.question_for_link?.split(" ").length - 5,
                  data?.question_for_link?.split(" ").length
                )
                .toString()
                .replaceAll(",", " ")}
            </h1>
          </div> */}

          <div
            className={`text-white my-20 ${jost.className} w-full flex justify-center `}
          >
            <p className="  max-w-[800px]">{data?.question_content}</p>
          </div>

          <button
            style={{ backgroundColor: "rgb(73,193,240)" }}
            className={`w-40 mx-auto py-5 px-8 rounded-md`}
          >
            {data?.button_link && (
              <Link href={data?.button_link} target="_blank">
                {data?.button_name}
              </Link>
            )}
          </button>
          {/*  Location */}
          {data?.domains?.map(
            (r, i) =>
              r !== "" && (
                <div
                  style={{ backgroundColor: "rgb(73,193,240)" }}
                  className="flex justify-between my-4 mt-10 mx-3 lg:flex-row flex-col rounded-md"
                >
                  <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
                    <div
                      className={`mx-3 lg:text-left text-center`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      {/* Location */}
                    </div>
                    <div
                      className="mx-3 underline"
                      style={{ fontSize: "1.2rem" }}
                    >
                      <a href={`${data?.domains_url[i]}`}>{r}</a>
                    </div>
                  </div>
                  {/* <div className="flex flex-col lg:p-8 p-4 justify-start">
                <div className="mx-3" style={{ fontSize: "1.2rem" }}>
                  Your Score
                </div>
                <div
                  className="mx-3 text-red-600 font-bold"
                  style={{ fontSize: "1.5rem" }}
                >
                  {language > 0 ? "50%" : "10%"}
                </div>
                <div
                  className={`mx-3 ${"bg-red-400"} rounded-md`}
                  style={{ fontSize: "1.2rem" }}
                >
                  medium
                </div>
              </div> */}
                </div>
              )
          )}

          <div className="max-w-[1000px]">
            <h1 className={`text-white mt-10`} style={{ fontSize: "1.5rem" }}>
              {data?.question_for_link}
              {/* ?.split(" ")
                .slice(0, data?.question_for_link?.split(" ").length - 5)
                .toString()
                .replaceAll(",", " ")} */}
            </h1>
          </div>

          <p className={`text-white my-10 max-w-[800px] ${jost.className}`}>
            {data?.question_content}
          </p>

          <button
            style={{ backgroundColor: "rgb(73,193,240)" }}
            className={`w-40 mx-auto py-5 px-8 rounded-md`}
          >
            {data?.button_link && (
              <Link href={data?.button_link} target="_blank">
                {data?.button_name}
              </Link>
            )}
          </button>

          <div className={`${jost.className} mt-12`}>Share it with friends</div>
          <div className="flex flex-row w-40 mx-auto py-5 px-8 rounded-md">
            {data?.button_link && (
              <>
                <Link href={data?.button_link} target="_blank">
                  <BsFacebook className="mx-2" color="white" />
                </Link>
                <Link href={data?.button_link} target="_blank">
                  <BsTwitter className="mx-2" color="white" />
                </Link>
                <BsLinkedin className="mx-2" color="white" />
              </>
            )}
          </div>
          <div className="mt-10 h-full relative right-20 flex flex-row justify-between content-between">
            <Image
              height={150}
              width={150}
              className="relative bottom-5  right-20"
              alt="logo"
              src={data?.logo}
            />
            <div className="left-32 top-14 relative">
              {data?.button_link && (
                <Link href={data?.button_link} target="_blank">
                  {data?.topic?.toUpperCase()} 2023 © Copyright
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default results;

//
// Is studying in a big city important to you?
