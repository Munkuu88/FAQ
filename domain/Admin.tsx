import {
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/clientApp";
import { maxWidth } from "../theme";
import { useUser } from "../context";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const MuiltChoose = ({ func, data }: any) => {
  const [value, setValue] = useState("");

  function Add() {
    func([...data, value]);
  }
  console.log("ss", data);

  return (
    <VStack alignItems={"unset"} w={"49%"}>
      <VStack alignItems={"unset"}>
        <Text>Хариулт</Text>
        <Textarea
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Flex justifyContent={"space-between"}>
          <Box />
          <Button onClick={Add}>Нэмэх</Button>
        </Flex>
      </VStack>

      <VStack alignItems={"unset"}>
        {data.map((el: any) => (
          <Text key={el}>{el}</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export function Admin() {
  const { user } = useUser();
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [answers, setAnswers] = useState([]);

  function SendDataQuestion() {
    setDoc(doc(db, "questions", Date.now().toString(36)), {
      answer: answers,
      category: category,
      links: { link: "google.com", text: "google" },
      location: location,
      question: question,
      subCategory: subCategory,
    })
      .then(console.log)
      .catch(console.log);
  }

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
          <MuiltChoose func={setAnswers} data={answers} />
          <Flex justifyContent={"space-between"}>
            <Box />
            <Button onClick={SendDataQuestion}>Хадгалах</Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent={"center"} alignItems={"center"} h="50vh">
      <Heading fontWeight={"semibold"}>Өөрийн мэдээллээр нэвтэрнэ үү? </Heading>
    </Flex>
  );
}
