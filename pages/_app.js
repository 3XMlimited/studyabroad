import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import QuestionsState from "../context/State";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QuestionsState>
        <Component {...pageProps} />
      </QuestionsState>
    </ChakraProvider>
  );
}
