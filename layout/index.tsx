import { Footer } from "./footer";
import { Header } from "./header";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ Component, pageProps }: any) {
  return (
    <Flex flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box w="100%" h="75px" />
      <Component {...pageProps} />
      <Flex flexGrow={1} />
      <Footer />
    </Flex>
  );
}
