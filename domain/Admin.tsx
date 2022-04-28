import {
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Box,
  Divider,
  HStack,
  Select,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/clientApp";
import { maxWidth } from "../theme";
import { useUser } from "../context";
import { useState, useEffect } from "react";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";
import Link from "next/link";
import { Toaster } from "../component/toast";

const MuiltChoose = ({ func, data, loadingButton }: any) => {
  const [value, setValue] = useState("");

  function Add() {
    func([...data, value]);
    setValue("");
  }

  return (
    <VStack alignItems={"unset"} w={"100%"}>
      <VStack alignItems={"unset"}>
        <Text>Хариулт</Text>
        <Textarea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Flex justifyContent={"space-between"}>
          <Box />
          <Button
            onClick={Add}
            isDisabled={loadingButton || value == "" ? true : false}
          >
            Нэмэх
          </Button>
        </Flex>
      </VStack>
      <Text>Хариултууд</Text>
      <VStack
        alignItems={"unset"}
        h="10vh"
        overflowY={"scroll"}
        border="0.5px solid gray"
        borderRadius={"2xl"}
        p="20px"
      >
        {data.length == 0 ? (
          <Text color={"gray"}>Одоогоор нэмсэн хариулт байхгүй байна.</Text>
        ) : (
          data.map((el: any) => <Text key={el}>{el}</Text>)
        )}
      </VStack>
    </VStack>
  );
};

const GetLink = ({ func, data, loadingButton }: any) => {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  function Add() {
    func([...data, { text: text, link: link }]);
    setText("");
    setLink("");
  }

  return (
    <VStack
      alignItems={"unset"}
      w={"100%"}
      border="0.5px solid gray"
      borderRadius={"2xl"}
      p="20px"
    >
      <HStack>
        <VStack alignItems={"unset"} w="100%">
          <Text>Link текст</Text>
          <Input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </VStack>
        <VStack alignItems={"unset"} w="100%">
          <Text>Link</Text>
          <Input
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </VStack>
      </HStack>
      <Flex justifyContent={"space-between"}>
        <Box />
        <Button
          onClick={Add}
          isDisabled={loadingButton || link == "" || text == "" ? true : false}
        >
          Нэмэх
        </Button>
      </Flex>
      <Text>Холбогдох холбоосууд</Text>
      <HStack
        p="20px"
        alignItems={"unset"}
        overflowY={"scroll"}
        border="0.5px solid gray"
        borderRadius={"2xl"}
      >
        {data.length == 0 ? (
          <Text color={"gray"}>Одоогоор нэмсэн холбоос байхгүй байна.</Text>
        ) : (
          data.map((el: any) => (
            <Link key={el.link} href={el.link}>
              <a target={"_blank"}>
                <Text textDecoration="underline">{el.text}</Text>
              </a>
            </Link>
          ))
        )}
      </HStack>
    </VStack>
  );
};

const DeleteNavbar = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    onSnapshot(collection(db, "questions"), (snapshot) =>
      setQuestions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  function Delete(id: any) {
    deleteDoc(doc(db, "questions", `${id}`));
  }

  return (
    <VStack
      alignItems={"unset"}
      w={"68%"}
      spacing={"20px"}
      borderRadius={"2xl"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
      p="40px"
    >
      <Flex justifyContent={"space-between"}>
        <Box />
        <Input
          w="300px"
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Хайх асуултаа оруулна уу?"
        />
      </Flex>
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Асуултууд
      </Text>
      <VStack
        alignItems={"unset"}
        spacing={"20px"}
        h="50vh"
        overflowY={"scroll"}
      >
        {questions
          .filter((val: any) => {
            if (searchWord == "") {
              return val;
            } else if (
              val.question.toLowerCase().includes(searchWord.toLowerCase())
            ) {
              return val;
            }
          })
          .map((el: any) => (
            <VStack alignItems={"unset"} key={el.id}>
              <Text key={el.question}>{el.question}</Text>
              <Flex justifyContent={"space-between"}>
                <Box />
                <Button w="fit-content" onClick={() => Delete(el.id)}>
                  Устгах
                </Button>
              </Flex>
              <Divider />
            </VStack>
          ))}
      </VStack>
    </VStack>
  );
};

const UserQuestions = () => {
  const [userQuestions, setUserQuestions] = useState<any>([]);
  const [searchWord, setSearchWord] = useState<any>("");

  useEffect(() => {
    onSnapshot(collection(db, "userQuestions"), (snapshot) =>
      setUserQuestions(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
    );
  }, []);

  function Delete(id: any) {
    deleteDoc(doc(db, "userQuestions", `${id}`));
  }

  return (
    <VStack
      alignItems={"unset"}
      w={"68%"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
      p="40px"
      borderRadius={"2xl"}
    >
      <Flex justifyContent={"space-between"}>
        <Box />
        <Input
          w="300px"
          placeholder="Хайх"
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </Flex>
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Хэрэглэгчийн хайсан хайлтууд
      </Text>
      {userQuestions
        .filter((val: any) => {
          if (searchWord == "") {
            return val;
          } else if (
            val.question.toLowerCase().includes(searchWord.toLowerCase())
          ) {
            return val;
          }
        })
        .map((el: any) => {
          return (
            <Box key={el.id}>
              <Text>{el.question}</Text>
              <Flex justifyContent={"space-between"} pb="10px">
                <Box /> <Button onClick={() => Delete(el.id)}>Устгах</Button>
              </Flex>
              <Divider />
            </Box>
          );
        })}
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
  const [links, setLinks] = useState([]);
  const [navbar, setNavbar] = useState(0);
  const [categorySelect, setCategorySelect] = useState<any>([]);
  const [loadingButton, setloadingButton] = useState(false);
  const [logOutLoader, setLogOutLoader] = useState(false);

  categorySelect.sort((a: any, b: any) => (a.category > b.category ? 1 : -1));

  const MotionText = motion(Text);

  function SendDataQuestion() {
    setloadingButton(true);
    setDoc(
      doc(
        db,
        "questions",
        Date.now().toString(36) +
          Math.floor(Math.random() * 1000 * 1000).toString(16)
      ),
      {
        answer: answers,
        category: category,
        links: links,
        location: location,
        question: question,
        subCategory: subCategory,
      }
    )
      .then(() => {
        console.log, setloadingButton(false);
        setQuestion("");
        setCategory("");
        setLocation("");
        setSubCategory("");
        setAnswers([]);
        setLinks([]);
        Toaster({
          title: "Асуулт амжилттай нэмэгдлээ.",
          desc: "",
          status: "success",
          start: loadingButton,
        });
      })
      .catch(() => {
        console.log, setloadingButton(false);
      });
  }

  function SignOut() {
    setLogOutLoader(true);
    signOut(auth).then(() => {
      setLogOutLoader(false), console.log;
    });
  }
  const NavbarItem = [
    { text: "Асуулт нэмэх", id: 0 },
    { text: "Асуулт устгах", id: 1 },
    { text: "Хэрэглэгчдийн хайлтыг харах", id: 2 },
  ];

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setCategorySelect(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return user && user.accessToken ? (
    <Flex justifyContent={"center"} w={"100%"} py="40px">
      <Flex justifyContent={"space-between"} maxWidth={maxWidth} w="100%">
        <Flex
          w="30%"
          h="50vh"
          p="40px"
          flexDir={"column"}
          justifyContent={"space-between"}
          borderRadius={"2xl"}
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
        >
          <VStack spacing={"20px"} alignItems={"unset"}>
            {NavbarItem.map((el) => {
              return (
                <MotionText
                  key={el.id}
                  onClick={() => setNavbar(el.id)}
                  whileHover={{ scale: 1.03 }}
                  cursor={"pointer"}
                  px="20px"
                  py="10px"
                  borderRadius={"xl"}
                  fontWeight={el.id == navbar ? "semibold" : ""}
                  color={el.id == navbar ? "white" : "black"}
                  bg={el.id == navbar ? "#1b4587" : "#f2f2f2"}
                >
                  {el.text}
                </MotionText>
              );
            })}
          </VStack>
          <Flex justifyContent={"space-between"}>
            <Box />
            <Button
              onClick={SignOut}
              isLoading={logOutLoader}
              colorScheme={"red"}
              px="20px"
              py="10px"
            >
              Гарах
            </Button>
          </Flex>
        </Flex>
        {navbar == 0 ? (
          <VStack
            alignItems={"unset"}
            w={"68%"}
            borderRadius={"2xl"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
            p="40px"
            spacing={"20px"}
          >
            <Flex justifyContent={"space-between"}>
              <VStack w={"49%"} alignItems={"unset"}>
                <Text>Асуулт</Text>
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </VStack>
              <VStack w={"49%"} alignItems={"unset"}>
                <Text>Холбогдох газар</Text>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </VStack>
            </Flex>
            <MuiltChoose
              func={setAnswers}
              data={answers}
              loadingButton={loadingButton}
            />
            <Flex justifyContent={"space-between"}>
              <VStack w={"49%"} alignItems={"unset"}>
                <Text>Категори</Text>
                <Select onChange={(e) => setCategory(e.target.value)}>
                  <option>Категори сонгоно уу?</option>
                  {categorySelect.map((el: any) => {
                    return (
                      <option key={el.category} value={el.category}>
                        {el.category}
                      </option>
                    );
                  })}
                </Select>
              </VStack>
              <VStack w={"49%"} alignItems={"unset"}>
                <Text>Дэд категори</Text>
                {categorySelect
                  .filter((val: any) => {
                    if (category == "") {
                      return <></>;
                    } else if (category == val.category) {
                      return val;
                    }
                  })
                  .map((el: any) => {
                    return (
                      <Select
                        key={el.category}
                        onChange={(e) => setSubCategory(e.target.value)}
                      >
                        {el.subCategory.map((el: any) => {
                          return (
                            <option key={el.text} value={el.text}>
                              {el.text}
                            </option>
                          );
                        })}
                      </Select>
                    );
                  })}
              </VStack>
            </Flex>
            <GetLink
              data={links}
              func={setLinks}
              loadingButton={loadingButton}
            />
            <Flex justifyContent={"space-between"}>
              <Box />
              <Button isLoading={loadingButton} onClick={SendDataQuestion}>
                Хадгалах
              </Button>
            </Flex>
          </VStack>
        ) : navbar == 1 ? (
          <DeleteNavbar />
        ) : (
          <UserQuestions />
        )}
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent={"center"} alignItems={"center"} h="50vh">
      <Heading fontWeight={"semibold"}>Өөрийн мэдээллээр нэвтэрнэ үү? </Heading>
    </Flex>
  );
}
