import { Flex, Heading, Text, VStack, Input } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { maxWidth } from "../theme";
import { useUser } from "../context";
import { useState } from "react";

const MuiltChoose = () => {
  return (
    <VStack alignItems={"unset"} w={"49%"}>
      <VStack alignItems={"unset"}>
        <Text>Хариулт</Text>
        <Input />
      </VStack>
      <VStack></VStack>
    </VStack>
  );
};

export function Admin() {
  const { user } = useUser();
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [subCategory, setSubCategory] = useState("");
  function SignOut() {
    signOut(auth).then(console.log);
  }
  const NavbarItem = ["Асуулт нэмэх", "Асуулт харах"];

  return user && user.accessToken ? (
    <Flex justifyContent={"center"} w={"100%"}>
      <Flex justifyContent={"space-between"} maxWidth={maxWidth} w="100%">
        <VStack w="30%" h="50vh" alignItems={"unset"}>
          {NavbarItem.map((el) => {
            return <Text key={el}>{el}</Text>;
          })}
          <Text onClick={SignOut}>Login</Text>
        </VStack>
        <VStack alignItems={"unset"} w={"68%"}>
          <Flex justifyContent={"space-between"}>
            <VStack w={"49%"} alignItems={"unset"}>
              <Text>Асуулт</Text>
              <Input onChange={(e) => setQuestion(e.target.value)} />
            </VStack>
            <VStack w={"49%"} alignItems={"unset"}>
              <Text>Холбогдох газар</Text>
              <Input onChange={(e) => setLocation(e.target.value)} />
            </VStack>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <VStack w={"49%"} alignItems={"unset"}>
              <Text>Категори</Text>
              <Input onChange={(e) => setCategory(e.target.value)} />
            </VStack>
            <VStack w={"49%"} alignItems={"unset"}>
              <Text>Дэд категори</Text>
              <Input onChange={(e) => setSubCategory(e.target.value)} />
            </VStack>
          </Flex>
          <MuiltChoose />
        </VStack>
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent={"center"} alignItems={"center"} h="50vh">
      <Heading fontWeight={"semibold"}>Өөрийн мэдээллээр нэвтэрнэ үү? </Heading>
    </Flex>
  );
}
