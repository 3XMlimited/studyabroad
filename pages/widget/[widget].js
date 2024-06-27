"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";
import Image from "next/image";

// import logo from "../../public/uploads/"+pathname?.split("/")[2];
export const getServerSideProps = ({ query }) => ({
  props: query,
});

const page = ({ country }) => {
  //   console.log("2", props.searchParams.country);
  const pathname = usePathname();
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  country = decodeURIComponent(country);

  // const countView = async (update) => {
  //   try {
  //     const response = await fetch("/api/widget", {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         widget: pathname.split("/")[2],
  //         update,
  //       }),
  //     });

  //     const result = await response.json();
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchData = async () => {
    // console.log("pathname", pathname?.split("/")[2]);
    try {
      setIsLoading(true);
      let url = "";
      if (pathname) {
        const response = await fetch("/api/widget", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            widget: pathname?.split("/")[2],
            country,
          }),
        });

        const result = await response.json();
        // console.log(result);
        if (result) {
          // console.log("1", result);
          // console.log(result);
          //   let urlList = result.find(
          //     (d) => d.widget.toString() === pathname.split("/")[1]
          //   );

          // if (result.case.includes("All")) {
          //   let uri = result.url?.action;
          //   let urls = [];

          //   Object.values(uri).map((r, i) => {
          //     if (r.state === true) {
          //       urls.push({
          //         client: Object.keys(uri)[i],
          //         value: r["%"] != 0 ? r["%"] / 100 : 0,
          //       });
          //     }
          //   });

          //   var randomNumber = Math.random();
          //   var randomKey;
          //   let value = 0;
          //   for (let i = 0; i < urls.length; i++) {
          //     const element = urls[i];
          //     value += element.value;
          //     if (randomNumber < value) {
          //       randomKey = element.client;
          //       break;
          //     } else if (i === urls.length) {
          //       randomKey = element.client;
          //     }
          //   }
          //   url = result.url?.url[randomKey];
          //   //   if (result.url.count) {
          //   //     if (result.url.count[`${randomKey}`]) {
          //   //       result.url.count[`${randomKey}`] += 1;
          //   //     } else {
          //   //       result.url.count[`${[randomKey]}`] = 1;
          //   //     }
          //   //   } else {
          //   //     result.url.count = {};
          //   //     result.url.count[`${[randomKey]}`] = 1;
          //   //   }
          //   //   await countView(result.url);
          // }

          // else if (result.case.includes("Country")) {
          //   try {
          //     url = result.url.url[`${props.searchParams.country}`];
          //     if (url === undefined) {
          //       url = result.url.url[`OTHER`];
          //     }
          //   } catch (error) {
          //     console.log(error);
          //   }
          // }
          setIsLoading(false);
          // if (result.includes("http")) window.location.assign(result);
          // if (result.url) {
          //   if (result.url.includes("http")) window.location.assign(result.url);
          // } else {
          //   {
          //     if (result.includes("http")) window.location.assign(result);
          //   }
          // }

          // setData(result);

          //   console.log(url);
          if (url !== undefined || url != null) {
            if (url.includes("http")) window.location.assign(result);
          }

          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper1">
        <div className="wrapper2">
          <div className="wrapper3">
            <div className="h-screen flex items-center relative">
              <div className="absolute top-[35%] left-[110%]">
                <Image
                  src={`/uploads/122007.jpg`}
                  // src={logo}
                  alt="logo"
                  width={220}
                  height={220}
                  className=" ml-[50px] "
                />
                {isLoading ? (
                  <Loading text={"Loading"} />
                ) : (
                  <div>
                    <p className="text-red-500 "></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
