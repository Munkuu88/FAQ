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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { useUser } from "../context";

export function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any>();
  const { setUser } = useUser();

  function SignIn() {
    signInWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        setUserData(userCredential.user);
        console.log("user", userCredential.user);
        setUser(userCredential.user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      });
  }

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
          <Input
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"Enter username"}
          />
        </VStack>
        <VStack alignItems={"unset"}>
          <Text>Password</Text>
          <PasswordInput setPassword={setPassword} />
        </VStack>
        <Button onClick={SignIn} colorScheme={"blue"}>
          Нэвтрэх
        </Button>
      </VStack>
    </Flex>
  );
}

const PasswordInput = ({ setPassword }: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputRightElement zIndex={0} width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
