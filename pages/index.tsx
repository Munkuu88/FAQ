import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { HomePage } from "../domain";

const Home: NextPage = () => {
  return (
    <Box py="60px">
      <HomePage />
    </Box>
  );
};

export default Home;
