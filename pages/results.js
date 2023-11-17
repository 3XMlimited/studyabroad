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
  const [chartLegends, setChartLegends] = useState({ colors: [], data: [] });

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
    if (answers[0] === null || answers === 0) {
      let value;
      // Get the value from local storage if it exists
      value = localStorage.getItem("data") || "";
      if (value) {
        value = JSON.parse(value);
        value = value.data;
        if (value && value.topic) {
          console.log(value?.topic);
          router.push(`/${value?.topic}`);
        } else {
          router.push(`/`);
        }
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

    window.onresize = function () {
      myChart.resize();
    };

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
        textStyle: { 
          color: '#FFF'
        }
      },
      series: [
        {
          // name: 'Access From',
          type: "pie",
          radius: ['70%', '100%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 5,
            borderColor: "#000",
            borderWidth: 1,
          },
          label: {
            show: false,
            position: "outside", // Set this to 'outside' to display names outside the chart
            fontSize: 12,
            fontWeight: "bold",
            color: "white",
            overflow: "break",
          },
          labelLine: {
            show: true, // Set this to true to show lines connecting names to the chart
            length: 9, // You can adjust the length of the lines as needed
          },
          // data: data?.chart,
          data: data?.chart,
          // data: [
          //   { value: 1048, name: 'Search Engine' },
          //   { value: 735, name: 'Direct' },
          //   { value: 580, name: 'Email' },
          //   { value: 484, name: 'Union Ads' },
          //   { value: 300, name: 'Video Ads' },
          // ],
        },
      ],
    };

    myChart.setOption(option);

    setChartLegends({ colors: myChart.getOption().color, data: myChart.getOption().series[0].data })

    return () => {
      myChart.dispose();
    };
  }, [data]);
  console.log(data);
  return (
    <div className="bg-black min-h-screen h-full w-full flex flex-col items-center text-white p-[20px] gap-[40px] overflow-x-hidden">
      <div className="h-full w-full flex flex-col items-center text-white lg:min-h-screen lg:grid lg:grid-cols-2 lg:px-[50px]">
        <div className="flex flex-col items-start">
          <div className="relative h-[40px] w-[40px] lg:h-[150px] lg:w-[150px] rounded-lg overflow-hidden">
            <Image
              src={data?.logo}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1
            className={`${jost.className} leading-tight text-left`}
            style={{ fontSize: "2.1rem" }}
          >
            Congratulations on Completing the Quiz!
          </h1>
          <p className={`${jost.className} my-[10px] leading-normal`}>
            Your full report has been been generated
          </p>
          <div
            className={`${jost.className} leading-normal whitespace-break-spaces`}
          >
            {/* {data?.thankyou_content} */}
            {data && <div dangerouslySetInnerHTML={{ __html: data?.thankyou_content }} />}
          </div>
        </div>

        <div className="h-fit w-full flex flex-col items-center">
          <div
            id="echarts-container"
            className="h-full min-h-[350px] w-full min-w-[200px]"
          />

          <div className="h-fit w-fit flex flex-col gap-[2px] mt-2">
            {chartLegends.data ? (
              chartLegends.data.map((e, i) => {
                let tempColor = chartLegends.colors[i] ? chartLegends.colors[i] : ''
                return (
                  <div className="h-fit w-full grid grid-cols-[30px_min-content_min-content] gap-[5px]" key={i}>
                    <div className={`h-[30px] w-full rounded-lg`} style={{ background: tempColor }}/>
                    <div className="h-full min-h-fit flex items-center">
                      <p className="break-words text-sm text-white">{e.name}</p>
                    </div>
                    <div className="h-full min-h-fit w-fit px-2 flex items-center bg-gray-800 rounded-lg">
                      {e.value}
                    </div>
                  </div>
                )
              })
            ) : (<></>)}
          </div>
        </div>
      </div>

      <div className="h-fit w-full max-w-[800px] flex justify-center">
        <div className="h-fit w-full flex flex-col items-center gap-[20px]">
          <div className="w-full flex justify-center">
            <h1
              className={`${jost.className} text-white text-left`}
              style={{ fontSize: "1.5rem" }}
            >
              {data?.question_for_link}
            </h1>
          </div>

          <div
            className={`text-white whitespace-break-spaces ${jost.className} w-full flex items-center text-left lg:text-center`}
          >
            {/* {data?.question_content} */}
            {data && <div dangerouslySetInnerHTML={{ __html: data?.question_content }} />}
          </div>

          <button
            style={{ backgroundColor: "rgb(73,193,240)" }}
            className={`w-fit py-5 px-8 rounded-md`}
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
                <a
                  href={`${data?.domains_url[i]}`}
                  className="w-full bg-[rgb(73,193,240)] underline text-[1.2rem] rounded-md p-4 lg:p-8"
                >
                  {r}
                </a>
                //   <div
                //     style={{ backgroundColor: "rgb(73,193,240)" }}
                //     className="w-full flex rounded-md"
                //   >
                //     {/* <div className="flex flex-col lg:p-8 p-4 justify-start">
                //   <div className="mx-3" style={{ fontSize: "1.2rem" }}>
                //     Your Score
                //   </div>
                //   <div
                //     className="mx-3 text-red-600 font-bold"
                //     style={{ fontSize: "1.5rem" }}
                //   >
                //     {language > 0 ? "50%" : "10%"}
                //   </div>
                //   <div
                //     className={`mx-3 ${"bg-red-400"} rounded-md`}
                //     style={{ fontSize: "1.2rem" }}
                //   >
                //     medium
                //   </div>
                // </div> */}
                //   </div>
              )
          )}

          <div className="h-fit w-full flex flex-col items-center my-6">
            <div className={`${jost.className}`}>Share it with friends</div>
            <div className="flex flex-row w-40 py-5 px-8 rounded-md">
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
          </div>
          <div className="h-fit w-full flex flex-row items-center justify-between gap-[10px]">
            <Image
              height={40}
              width={40}
              className="rounded-md"
              alt="logo"
              src={data?.logo}
            />
            <div className="relative">
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
