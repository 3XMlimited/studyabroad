import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
const Template1 = () => {
  const [dummy, setDummy] = useState({});
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [details, setDetails] = useState({});
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const fetchData = async () => {
    const response = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: pathname?.split("/")[2] }),
    });
    const data = await response.json();
    console.log("Id", data);
    setDummy(data);
    setName(data.name);
  };

  const fetchSubmit = async () => {
    const response = await fetch("/api/db", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data: details, name }),
    });
    const data = await response.json();
    // console.log("Id", data);
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  useEffect(() => {
    // fetch form details from api
    const getFormFields = () => {
      let temp_details = {};

      if (
        dummy?.fields &&
        Array.isArray(dummy?.fields) &&
        dummy?.fields.length > 0
      ) {
        dummy?.fields?.map((e) => {
          temp_details[e?.value] = "";
        });
      }
      if (dummy?.products?.length > 0) {
        temp_details.products = "";
      }

      setData(dummy);
      setDetails(temp_details);
    };

    getFormFields();
  }, [dummy]);

  const handleFormSubmit = async () => {
    const check = Object.values(details)
      ?.map((e) => e)
      ?.filter((f) => f);

    if (check?.length !== Object.values(details)?.length) {
      setDisplayErrorMsg(true);
    } else {
      setDisplayErrorMsg(false);
      await fetchSubmit();
      // RUN API HERE - the inputs are all inside that input object
      //   window.alert(JSON.stringify(details));
      // router.push(data?.thankyou);
      window.open(data?.thankyou);

      return;
    }
  };

  return (
    <div className="h-screen w-full bg-white">
      <div
        className=" h-full w-full p-[20px] border-2 border-[#368d54]"
        style={{
          background: data?.BackgroundColor ? data?.BackgroundColor : "#d4b65e",
        }}
      >
        <div className="mb-5 mt-[60px]">
          <p
            className="text-center text-[20px] font-semibold"
            style={{ color: data?.Color ? data?.Color : "#000" }}
          >
            {data?.headline ? data?.headline : "Fill out the form below"}
          </p>
          {displayErrorMsg ? (
            <p className="text-base text-red-600 text-center">
              Please fill up every field!
            </p>
          ) : (
            <></>
          )}
        </div>

        <div className="h-fit w-full flex flex-col gap-10">
          {data?.products?.length > 0 ? (
            <select
              className="bg-white  w-full h-[42px] p-[3px_3px_3px_12px] text-black placeholder:text-black shadow-[2px_5px_0px_4px_rgba(0,0,0,0.2)] outline-none border border-[#888] hover:border-[#000] focus-visible:border-[#00F]"
              value={details.products}
              onChange={(e) => {
                setDetails((p) => {
                  return {
                    ...p,
                    products: e.target.value,
                  };
                });
              }}
            >
              <option value="">Price & Quantity</option>
              {data?.products?.map((e, i) => (
                <option value={e} key={i}>
                  {e}
                </option>
              ))}
            </select>
          ) : (
            <></>
          )}

          {data?.fields &&
          Array.isArray(data?.fields) &&
          data?.fields?.length > 0 ? (
            data?.fields
              ?.filter((f) => f?.value?.toLowerCase() !== "address")
              ?.map((item, i) => (
                <input
                  type="text"
                  placeholder={item?.label}
                  key={i}
                  className="w-full h-[42px] p-[3px_3px_3px_12px] text-black placeholder:text-black shadow-[2px_5px_0px_4px_rgba(0,0,0,0.2)] outline-none border border-[#888] hover:border-[#000] focus-visible:border-[#00F]"
                  value={details[item?.value]}
                  onChange={(e) => {
                    setDetails((p) => {
                      return {
                        ...p,
                        [item?.value]: e.target.value,
                      };
                    });
                  }}
                />
              ))
          ) : (
            <></>
          )}

          {data?.fields &&
          Array.isArray(data?.fields) &&
          data?.fields?.length > 0 ? (
            data?.fields
              ?.filter((f) => f?.value?.toLowerCase() === "address")
              ?.map((item, i) => (
                <textarea
                  placeholder={item?.label}
                  rows={3}
                  key={i}
                  className="w-full p-[3px_3px_3px_12px] text-black placeholder:text-black shadow-[2px_5px_0px_4px_rgba(0,0,0,0.2)] outline-none border border-[#888] hover:border-[#000] focus-visible:border-[#00F] resize-none"
                  value={details[item?.value]}
                  onChange={(e) => {
                    setDetails((p) => {
                      return {
                        ...p,
                        [item?.value]: e.target.value,
                      };
                    });
                  }}
                />
              ))
          ) : (
            <></>
          )}
        </div>

        <button
          className={`h-[48px] w-full mt-5 outline-none border-2 border-black text-center text-[24px] font-semibold bg-repeat duration-200 cursor-pointer brightness-110 rounded-[12px]
            bg-[url(data:image/png;base64,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)]
            bg-[#5bc851] shadow-[inset_0px_3px_6px_0px_hsla(0,0%,100%,0.3),_inset_-2px_-3px_6px_0px_rgba(0,0,0,0.6),inset_50px_0px_50px_-40px_rgba(0,0,0,0.6),_inset_-50px_0px_50px_-40px_rgba(0,0,0,0.6),_1px_1px_6px_1px_rgba(0,0,0,0.6),_1px_1px_3px_0px_hsla(0,0%,100%,0.3)]
          `}
          style={{
            backgroundColor: data?.ButtonBGColor
              ? data?.ButtonBGColor
              : "#5bc851",
            color: data?.ButtonTextColor ? data?.ButtonTextColor : "#FFF",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = data?.ButtonHoverColor
              ? data?.ButtonHoverColor
              : "#a210c7")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = data?.ButtonBGColor
              ? data?.ButtonBGColor
              : "#5bc851")
          }
          onClick={() => handleFormSubmit()}
        >
          {data?.button_text ? data?.button_text : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Template1;
