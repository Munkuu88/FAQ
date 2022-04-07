import {
  Flex,
  VStack,
  Button,
  HStack,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { maxWidth } from "../theme";

const datas = ["3 байр хаана байдаг вэ?", "Дотуур байрны үнэ хэд вэ?"];

const MessageText = ({ text }: { text: string }) => {
  return (
    <Box px="20px" w="fit-content">
      <Text p="10px" bg="blue.200" borderRadius={"md"}>
        {text}
      </Text>
    </Box>
  );
};

export function AddQuestion() {
  return (
    <Flex w="100%" justifyContent={"center"} py="20px">
      <Flex
        flexDir={"column"}
        w={"100%"}
        maxW={maxWidth}
        h={["90vh", "60vh"]}
        border={"1px solid black"}
        borderRadius={"xl"}
      >
        <VStack
          py="20px"
          overflowY={"scroll"}
          borderBottom={"1px solid black"}
          w={"100%"}
          h="85%"
          alignItems={"unset"}
        >
          {datas.map((el: string, ind: number) => {
            return <MessageText key={ind} text={el} />;
          })}
        </VStack>
        <Flex
          h={["15%"]}
          w={"100%"}
          p="20px"
          justifyContent={"end"}
          alignItems={"flex-end"}
        >
          <Box />
          <HStack w={["100%", "40%"]}>
            <Input />
            <Button>Илгээх</Button>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
