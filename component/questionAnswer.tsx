import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  HStack,
  Text,
  Button,
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { LoaderQuestion } from "./loaders/question";
import Link from "next/link";

const LocationModal = ({ open, setOpen, location }: any) => {
  const size = useBreakpointValue({ xs: "xs", md: "md" });

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignItems={"center"}>
            Холбоо барих газар болон мэдээлэл <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            {location == "" ? "Мэдээлэл байхгүй байна" : location}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Буцах</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const QuestionAnswerDetail = ({
  question,
  answers,
  setOpen,
  setLocation,
  place,
  links,
}: any) => {
  console.log(links);
  return (
    <Box py="10px">
      <AccordionItem border="none" bg="#f7f7f7" borderRadius={"10px"}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List>
            {answers.map((el: string) => {
              return (
                <ListItem key={el} py="10px">
                  <HStack>
                    <Text>-</Text>
                    <Text>{el}</Text>
                  </HStack>
                </ListItem>
              );
            })}
            {links.map((el: any) => {
              return (
                <Link href={el.link} key={el.link}>
                  <a target={"_blank"} style={{ width: "fit-content" }}>
                    <Text
                      w="fit-content"
                      textDecoration={"underline"}
                      color={"blue"}
                    >
                      {el.text}
                    </Text>
                  </a>
                </Link>
              );
            })}
          </List>
          <Flex justifyContent={"space-between"}>
            <Box />
            <Button
              onClick={() => {
                setOpen(true), setLocation(place);
              }}
              colorScheme={"blue"}
            >
              Холбогдох газар
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};

export function QuestionAnswer({
  sortGetData,
  questionSort,
  buttonActive,
  setButtonActive,
}: any) {
  const [questionsData, setQuestionsData] = useState<any>();
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

  const getDatas = async () => {
    const data = await getDocs(collection(db, "questions"));
    data.forEach((el) => setQuestionsData(el.data().data));
  };
  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    setButtonActive(false);
  }, [buttonActive]);

  return (
    <>
      <Accordion allowToggle w={"100%"} defaultIndex={[1]}>
        {sortGetData
          ? sortGetData
              .filter((val: any) => {
                if (questionSort == "") {
                  return val;
                } else if (
                  val.question
                    .toLowerCase()
                    .includes(questionSort.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((el: any) => {
                return (
                  <QuestionAnswerDetail
                    key={el.question}
                    links={el.links}
                    question={el.question}
                    answers={el.answer}
                    setOpen={setOpen}
                    open={open}
                    setLocation={setLocation}
                    place={el.location}
                  />
                );
              })
          : [0, 1, 2, 3, 4].map((el) => {
              return <LoaderQuestion key={el} />;
            })}
      </Accordion>
      <LocationModal open={open} setOpen={setOpen} location={location} />
    </>
  );
}
