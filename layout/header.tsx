import { Flex, Text, Icon, HStack, Box } from "@chakra-ui/react";
import { maxWidth } from "../theme";
import Link from "next/link";

const details = [
  { text: "Admin", link: "/login" },
  { text: "Хайх", link: "/search" },
];

export function Header() {
  return (
    <Box
      w="100%"
      pos={"fixed"}
      borderBottom={"1px solid black"}
      zIndex={1}
      bg={"#1b4587"}
      color={"white"}
    >
      <Flex justifyContent={"center"} py="20px">
        <Flex justifyContent={"space-between"} w={"100%"} maxW={maxWidth}>
          <Link href={"/"}>
            <Box
              cursor={"pointer"}
              bg={"url(https://www.num.edu.mn/img/logo.png)"}
              bgPos={"center"}
              bgSize={"cover"}
              boxSize={"50px"}
            />
          </Link>
          <HStack spacing={"20px"}>
            {details.map((el) => {
              return (
                <Link href={`${el.link}`} key={el.link}>
                  <Text
                    textTransform={"uppercase"}
                    key={el.link}
                    fontWeight={"bold"}
                    cursor="pointer"
                  >
                    {el.text}
                  </Text>
                </Link>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
