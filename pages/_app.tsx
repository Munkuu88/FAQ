import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../context";

function MyApp(AppProps: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Layout {...AppProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
