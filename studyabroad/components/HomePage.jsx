import React, { useState } from "react";
import { Jost } from "next/font/google";
import Image from "next/image";

import imahe from "../public/image.png";
import arrow from "../public/arrow.png";
const jost = Jost({ subsets: ["latin"] });

import { useRouter } from "next/navigation";

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

const HomePage = () => {
  //  Modal To get email
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const onchange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  //   Start Quiz Button
  const saveEmail = () => {
    // Pending

    router.push("/questions");
  };

  return (
    <div className="flex lg:flex-row lg:mx-auto flex-col justify-center align-middle items-center content-center my-auto mx-3 overflow-x-hidden ">
      <div className="flex flex-col item-center content-center justify-center lg:w-[50vw] my-3 lg:my-auto">
        <h1
          className={`text-white ${jost.className} text lg:ml-24`}
          style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          Discover Your Perfect Study Abroad Program.
        </h1>
        <h1
          className={`text-white ${jost.className}  text lg:ml-24`}
          style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          Find Your Fit!
        </h1>
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
            Answer 12 questions and we’ll get you{" "}
          </h3>
        </div>
        <h3
          className={`text-white text-xl hidden lg:block lg:mx-24 ${jost.className}`}
          style={{ fontSize: "1.6rem" }}
        >
          a personalised report{" "}
        </h3>
        {/*  for mobile devices */}

        <h3
          className={`text-white lg:hidden  ${jost.className}`}
          style={{ fontSize: "1.6rem" }}
        >
          Answer 12 questions and we’ll get you a personalised report{" "}
        </h3>
        {/*  Next Components */}
        <div
          className={`text-white hidden lg:block lg:ml-24 my-3 ${jost.className}`}
        >
          Unlock your ideal study abroad experience with our interactive quiz.
          Discover the best universities to study abroad based on your
          preferences in Location, Academics, Language, Culture, and Budget.
          Start your journey today!
        </div>

        {/* Button */}
        {/* <div  className="text-white inline" style={{backgroundColor:'#49C1F0'}}>

</div> */}

        <button
          onClick={onOpen}
          style={{ backgroundColor: "#49C1F0" }}
          className={`w-52 rounded-md p-4 ml-24 mt-11 hidden lg:block`}
        >
          <div className="text-white">
            <p>Take The Scorecard</p>
            <p>(It only takes 1 minute)</p>
          </div>
        </button>
      </div>

      <div className="flex flex-col justify-center content-center items-center lg:my-auto">
        <Image alt="Universities study abroad" src={imahe} />
        <div
          className={`text-white lg:hidden block lg:ml-24 my-3 ${jost.className}`}
        >
          Unlock your ideal study abroad experience with our interactive quiz.
          Discover the best universities to study abroad based on your
          preferences in Location, Academics, Language, Culture, and Budget.
          Start your journey today!
        </div>
        <button
          onClick={onOpen}
          style={{ backgroundColor: "#49C1F0" }}
          className={`w-full rounded-md p-4  mt-5 lg:hidden block`}
        >
          <div className="text-white">
            <p>Take The Scorecard</p>
            <p>(It only takes 1 minute)</p>
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
            Enter your details below to start the scorecard
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
                placeholder="First name *"
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
                placeholder="Email *"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter
            mt={0}
            className="flex justify-center items-center w-full"
            width={"full"}
          >
            <Button
              mr={2}
              onClick={saveEmail}
              className={`w-96 ${jost.className}`}
              backgroundColor={"#49C1F0"}
              fontWeight={"medium"}
              color={"white"}
            >
              Start the Quiz Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HomePage;
