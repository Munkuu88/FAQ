import {
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { maxWidth } from "../theme";
import Link from "next/link";
import { CgDetailsMore } from "react-icons/cg";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";

const details = [
  { name: " БАЙГАЛЬ ЭХ ЛИЦЕЙ АХЛАХ СУРГУУЛЬ ", link: "/" },
  { name: "ЭКОЛОГИЙН БОЛОВСРОЛЫН ТӨВ", link: "/" },
  { name: " ДОТООД ДҮРЭМ ЖУРАМ", link: "/" },
  { name: " ЗАХИРГААНЫ ЗӨВЛӨЛИЙН МЭДЭЭЛЭЛ", link: "/" },
  { name: "АЖЛЫН БАЙР" },
];

const contacts = [
  {
    icon: MdLocationPin,
    text: "Их сургуулийн гудамж - 1, Бага тойруу, Сүхбаатар дүүрэг, Улаанбаатар",
  },
  { icon: MdPhone, text: "75754400, 77307730-1163" },
  { icon: MdEmail, text: "news@num.edu.mn" },
];

export function Footer() {
  return (
    <Flex
      justifyContent={"center"}
      pt={["50px", "30px"]}
      pb={["100px", "30px"]}
      borderTop={"1px solid gray"}
      bg={"#153a75"}
      color={"white"}
    >
      <SimpleGrid w="100%" maxW={maxWidth} columns={[1, 3]} gap={[8, 4]}>
        <Link href={"/"}>
          <HStack h="fit-content" cursor={"pointer"}>
            <Box
              bg={"url(https://www.num.edu.mn/img/logo.png)"}
              bgPos={"center"}
              bgSize={"cover"}
              boxSize={"60px"}
            />
            <Text fontWeight={"bold"} fontSize={"lg"}>
              MUIS - FAQ
            </Text>
          </HStack>
        </Link>

        <VStack w="100%" alignItems={"unset"} spacing={"15px"}>
          <Text fontSize={"lg"} fontWeight={"500"}>
            Холбоосууд
          </Text>
          {details.map((el, ind) => {
            return (
              <Link href={`${el.link}`} key={ind}>
                <HStack cursor={"pointer"}>
                  <Icon as={CgDetailsMore} />
                  <Text fontSize={"sm"}>{el.name}</Text>
                </HStack>
              </Link>
            );
          })}
        </VStack>
        <VStack w="100%" alignItems={"unset"} spacing={"15px"}>
          <Text fontSize={"lg"} fontWeight={"500"}>
            Холбогдох
          </Text>
          {contacts.map((el, ind) => {
            return (
              <HStack key={ind}>
                <Icon as={el.icon} />
                <Text fontSize={"sm"}>{el.text}</Text>
              </HStack>
            );
          })}
        </VStack>
      </SimpleGrid>
    </Flex>
  );
}
