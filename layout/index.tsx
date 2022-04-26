import { Footer } from "./footer";
import { Header } from "./header";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useUser } from "../context";
import { auth } from "../firebase/clientApp";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/dist/client/router";

export default function Layout({ Component, pageProps }: any) {
  const { setUser, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user && router.pathname == "/login") {
        router.push("/admin");
      } else if (!user && router.pathname == "/admin") {
        router.push("/login");
      }
    });
  }, [user]);

  return (
    <Flex flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box w="100%" h="90px" />
      <Component {...pageProps} />
      <Flex flexGrow={1} />
      <Footer />
    </Flex>
  );
}
