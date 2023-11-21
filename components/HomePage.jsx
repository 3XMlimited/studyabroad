import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import imahe from "../public/image.png";
import arrow from "../public/arrow.png";
const jost = Jost({ subsets: ["latin"] });

import { useRouter } from "next/router";
import { language } from "@/utils/language";

import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const HomePage = ({ topic }) => {
  //  Modal To get email
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(false);
  const router = useRouter();

  async function fetchData() {
    setIsLoading(true);

    if (topic !== undefined && topic !== null) {
      const response = fetch(`/api/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: topic,
        }),
      })
        .then((res) => {
          const data = res.json();
          return data;
        })
        .then((data) => {
          if (data.success === false) {
            router.push("/");
          }
          data.result.languageContent = language[`${data.result.language}`];
          console.log("data", data.result);
          setData(data.result);
          // let length = data?.result?.question_list?.length;

          // setQuestion(length);
          // console.log(length);
          if (typeof window !== "undefined") {
            localStorage.setItem("data", JSON.stringify({ data: data.result }));
          }
          setIsLoading(false);
          console.log("done");
          return;
        });
    }

    //
  }

  useEffect(() => {
    fetchData();
  }, [topic]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let value;
      // Get the value from local storage if it exists
      value = localStorage.getItem("data") || "";

      if (value !== "") {
        value = JSON.parse(value);
        if (value && value.question_list) {
          value = value.data;
          value.languageContent = language[`${value.language}`];
          setData(value);
        }
      }
    }
  }, [topic]);

  const onchange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  //   Start Quiz Button
  const saveEmail = async () => {
    // Pending
    setLoading(true);
    setState(true);
    try {
      const response = await fetch(
        "https://goatrack.io/api/convertkit/email_collect",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            first_name: name,
            id: data?.forms,
          }),
        }
      );
      const result = await response.json();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    // return result;
  };
  const successfulSend = async () => {
    if (state) {
      // router.push(`/questions/${topic}`);
      setState(false);
    } else {
      setState(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>{data?.languageContent.home?.loading}...</div>
      ) : (
        <>
          {state && (
            <div
              className="fixed top-0  h-full bg-black/60 backdrop-blur-md w-full flex items-center justify-center p-[20px]"
              style={{ zIndex: 10000 }}
            >
              <div className="h-full max-h-[250px] w-full max-w-[450px] p-[20px] bg-sky-200 rounded-xl flex flex-col items-center justify-center shadow-[0px_0px_10px_5px] shadow-[#5D5454]/20 gap-[20px]">
                <p className=" text-3xl font-bold">
                  {data?.languageContent?.home?.ready_dialogue_title}
                </p>
                {loading ? (
                  <Loading text={data?.languageContent.home?.loading} />
                ) : (
                  <>
                    {topic === "m/studyabroad" ? (
                      <Link
                        href={`/m/question_studyabroad`}
                        as={`/m/question_studyabroad`}
                        style={{ width: "100%" }}
                      >
                        <button
                          className="h-[50px] w-full bg-[#49C1F0] rounded-lg text-gray-700 font-bold"
                          // onClick={successfulSend}
                        >
                          {data?.languageContent?.home?.ready_dialogue_button}
                        </button>
                      </Link>
                    ) : (
                      <Link
                        href={`/questions/[topic]`}
                        as={`/questions/${topic}`}
                        style={{ width: "100%" }}
                      >
                        <button
                          className="h-[50px] w-full bg-[#49C1F0] rounded-lg text-gray-700 font-bold"
                          // onClick={successfulSend}
                        >
                          {data?.languageContent?.home?.ready_dialogue_button}
                        </button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          <div className="flex lg:flex-row lg:mx-auto flex-col justify-center align-middle items-center content-center  m-3 overflow-x-hidden ">
            <div className="flex flex-col item-center content-center justify-center lg:w-[50vw] my-3 lg:my-auto">
              <div
                className={`text-white ${jost.className} text lg:ml-24 max-w-[800px]`}
                style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
              >
                {/* {data?.headline} */}
                {data && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div id="buttonLink">${data?.headline}</div>`,
                    }}
                  />
                )}
              </div>
              {/* <h1
          className={`text-white ${jost.className}  text lg:ml-24`}
          style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          Find Your Fit!
        </h1> */}
              {/* For Lg Screen */}
              <div className="flex flex-row">
                <Image
                  alt="arrow"
                  src={arrow}
                  className="relative left--16 hidden lg:block"
                />
                <h3
                  className={`text-white text-xl mt-5  hidden lg:block ${jost.className}`}
                  style={{ fontSize: "1.6rem" }}
                >
                  {/* Answer {data?.question_list?.length} questions and we’ll get
                  you{" "} */}
                  {data?.languageContent.home.sub_heading.split("10")[0] +
                    data?.question_list?.length +
                    data?.languageContent.home.sub_heading
                      .split("10")[1]
                      .split(" ")
                      .slice(0, -3)
                      .toString()
                      .replaceAll(",", " ")}
                </h3>
              </div>
              <h3
                className={`text-white text-xl hidden lg:block lg:mx-24 ${jost.className}`}
                style={{ fontSize: "1.6rem" }}
              >
                {/* a personalised report{" "} */}
                {data?.languageContent?.home?.sub_heading
                  .split("10")[1]
                  .split(" ")
                  .slice(-3)
                  .toString()
                  .replaceAll(",", " ")}
              </h3>
              {/*  for mobile devices */}

              <h3
                className={`text-white lg:hidden  ${jost.className}`}
                style={{ fontSize: "1.6rem" }}
              >
                {data?.languageContent?.home?.sub_heading.split("10")[0] +
                  data?.question_list?.length +
                  data?.languageContent?.home?.sub_heading.split("10")[1]}
              </h3>
              {/*  Next Components */}
              <div
                className={`text-white whitespace-break-spaces hidden lg:block lg:ml-24 my-3 ${jost.className} `}
              >
                {/* {data?.content} */}
                {data && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div id="buttonLink">${data?.content}</div>`,
                    }}
                  />
                )}
              </div>

              {/* Button */}
              {/* <div  className="text-white inline" style={{backgroundColor:'#49C1F0'}}>

</div> */}

              <button
                onClick={onOpen}
                style={{ backgroundColor: "#49C1F0" }}
                className={`w-fit min-w-52 rounded-md p-4 ml-24 mt-11 hidden lg:block`}
              >
                <div className="text-white">
                  <p>{data?.languageContent?.home?.button_top}</p>
                  <p>({data?.languageContent?.home?.button_bottom})</p>
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-center content-center items-center lg:my-auto">
              <Image alt="image" src={data?.image} width={600} height={600} />
              <div
                className={`text-white whitespace-break-spaces lg:hidden block lg:ml-24 my-3 ${jost.className}`}
              >
                <div dangerouslySetInnerHTML={{ __html: data?.content }} />
              </div>
              <button
                onClick={onOpen}
                style={{ backgroundColor: "#49C1F0" }}
                className={`w-full rounded-md p-4  mt-5 lg:hidden block`}
              >
                <div className="text-white">
                  <p>{data?.languageContent?.home?.button_top}</p>
                  <p>({data?.languageContent?.home?.button_bottom})</p>
                </div>
              </button>
            </div>

            {/* Modal  */}
            <Modal
              isCentered
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent className="" backgroundColor={"#5D5454"}>
                <ModalHeader
                  textAlign={"center"}
                  alignContent={"center"}
                  text
                  className={`text-white ${jost.className} font-light`}
                  fontWeight={"medium"}
                  fontSize={"1rem"}
                >
                  {data?.languageContent.home?.form_title}
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody backgroundColor={"#5D5454"} pb={6}>
                  <FormControl>
                    <Input
                      value={name}
                      onChange={onchange}
                      name="name"
                      className={jost.className}
                      backgroundColor={"white"}
                      ref={initialRef}
                      placeholder={data?.languageContent.home?.form_name}
                    />
                  </FormControl>

                  <FormControl mb={0} mt={4}>
                    <Input
                      value={email}
                      onChange={onchange}
                      name="email"
                      className={jost.className}
                      backgroundColor={"white"}
                      type="email"
                      placeholder={data?.languageContent.home?.form_email}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter
                  mt={0}
                  className="flex justify-center items-center w-full"
                  width={"full"}
                >
                  {/* <Link
                    onClick={saveEmail}
                    href={`/questions/[topic]`}
                    as={`/questions/${topic}`}
                  > */}
                  <Button
                    mr={2}
                    onClick={saveEmail}
                    className={`w-96 ${jost.className}`}
                    backgroundColor={"#49C1F0"}
                    fontWeight={"medium"}
                    color={"white"}
                  >
                    {state
                      ? data?.languageContent?.home?.form_button_done
                      : data?.languageContent?.home?.form_button}
                  </Button>
                  {/* </Link> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
