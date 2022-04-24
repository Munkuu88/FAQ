import {
  Flex,
  Input,
  Text,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export function Login() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h="80vh">
      <VStack
        w={["350px"]}
        alignItems={"unset"}
        spacing={"20px"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
        px="30px"
        py="40px"
        borderRadius={"lg"}
      >
        <Text
          w="100%"
          textAlign={"center"}
          fontWeight={"semibold"}
          fontSize={"xl"}
        >
          Admin Login
        </Text>
        <VStack alignItems={"unset"}>
          <Text>Username</Text>
          <Input placeholder={"Enter username"} />
        </VStack>
        <VStack alignItems={"unset"}>
          <Text>Password</Text>
          <PasswordInput />
        </VStack>
        <Button colorScheme={"blue"}>Нэвтрэх</Button>
      </VStack>
    </Flex>
  );
}

const PasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
