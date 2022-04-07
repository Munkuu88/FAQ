import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp(AppProps: AppProps) {
  return (
    <ChakraProvider>
      <Layout {...AppProps} />
    </ChakraProvider>
  );
}

export default MyApp;
