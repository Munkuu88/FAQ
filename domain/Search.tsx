import {
  Flex,
  Box,
  VStack,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  List,
  HStack,
  Checkbox,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { maxWidth } from "../theme";
import { QuestionAnswer } from "../component/questionAnswer";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/clientApp";
import { useEffect, useState } from "react";

const Filter = ({ category, subCategory, setSortState }: any) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {category}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List>
          {subCategory.map((el: any) => {
            return (
              <Flex
                onClick={() => {
                  setSortState(el.link);
                }}
                key={el.link}
                py="5px"
                alignItems={"unset"}
              >
                <Checkbox pr="15px" />
                <Text>{el.text}</Text>
              </Flex>
            );
          })}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FilterDrawer = ({ isOpen, onClose, setSortState }: any) => {
  const [filters, setFilters] = useState<any>([]);

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setFilters(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  filters.sort((a: any, b: any) => (a.category > b.category ? 1 : -1));

  return (
    <Drawer isOpen={isOpen} size={"md"} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>
        <DrawerBody>
          <VStack>
            <Accordion w={"100%"} defaultIndex={[0]}>
              {filters.map((el: any) => {
                return (
                  <Filter
                    key={el.category}
                    setSortState={setSortState}
                    category={el.category}
                    subCategory={el.subCategory}
                  />
                );
              })}
            </Accordion>
          </VStack>{" "}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filters, setFilters] = useState<any>([]);
  const [sortState, setSortState] = useState<any>([]);
  const [sortGetData, setSortGetData] = useState<any>();

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setFilters(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  filters.sort((a: any, b: any) => (a.category > b.category ? 1 : -1));

  const q = query(
    collection(db, "questions"),
    where("subCategory", "==", `${sortState}`)
  );

  const sortData = async () => {
    const querySnapshot = await getDocs(q);
    setSortGetData(querySnapshot.docs.map((el) => el.data()));
  };

  useEffect(() => {
    sortData();
  }, [sortState]);

  // const sortData = query(
  //   collection(db, "questions"),
  //   where("question", "in", "төлбөр")
  // );
  // const getSortData = async () => {
  //   const querySnapshot = await getDocs(sortData);
  //   setSortGetData(querySnapshot.docs.map((el) => el.data()));
  //   console.log("-->", sortGetData);
  // };

  return (
    <Flex justifyContent={"center"}>
      <Flex
        maxW={maxWidth}
        w={"100%"}
        py="30px"
        justifyContent={"space-between"}
      >
        <VStack w={"25%"} display={["none", "flex"]}>
          <Accordion w={"100%"} defaultIndex={[0]}>
            {filters.map((el: any) => {
              return (
                <Filter
                  key={el.category}
                  setSortState={setSortState}
                  category={el.category}
                  subCategory={el.subCategory}
                />
              );
            })}
          </Accordion>
        </VStack>
        <VStack w={["100%", "73%"]}>
          <Flex
            justifyContent={"space-between"}
            w="100%"
            display={["none", "flex"]}
          >
            <Box />
            <HStack w="60%">
              <Input placeholder={"Хайх асуултаа оруулна уу"} />
              <Button>Хайх</Button>
            </HStack>
          </Flex>
          <QuestionAnswer sortGetData={sortGetData} />
        </VStack>
        <Button
          onClick={onOpen}
          pos={"fixed"}
          left={"50%"}
          transform={"translate(-50%)"}
          bottom={"50px"}
          display={["block", "none"]}
          size={"lg"}
          colorScheme={"blue"}
        >
          Filter
        </Button>
        <FilterDrawer
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setSortState={setSortState}
        />
      </Flex>
    </Flex>
  );
}
