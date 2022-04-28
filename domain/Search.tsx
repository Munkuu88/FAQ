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
import { doc, setDoc } from "firebase/firestore";
import { LoaderCategory } from "../component/loaders/category";

const Filter = ({
  category,
  subCategory,
  setSortState,
  setSort,
  onClose,
}: any) => {
  const [id, setId] = useState<number>();

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
          {subCategory.map((el: any, ind: number) => {
            return (
              <Flex
                onClick={() => {
                  setSortState(el.text), setSort(true), setId(ind), onClose();
                }}
                key={el.link}
                py="5px"
                alignItems={"unset"}
              >
                <Checkbox isChecked={ind == id ? true : false}>
                  {el.text}
                </Checkbox>
              </Flex>
            );
          })}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FilterDrawer = ({ isOpen, onClose, setSortState, setSort }: any) => {
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
                    onClose={onClose}
                    setSort={setSort}
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export function Search(sortLink: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filters, setFilters] = useState<any>();
  const [sortState, setSortState] = useState<any>([]);
  const [sortGetData, setSortGetData] = useState<any>();
  const [sort, setSort] = useState<any>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [questionSort, setQuestionSort] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const SaveUserQuestion = () => {
    setDoc(
      doc(
        db,
        "userQuestions",
        Date.now().toString(36) +
          Math.floor(Math.random() * 1000 * 1000).toString(16)
      ),
      {
        question: searchTerm,
      }
    )
      .then(console.log)
      .catch(console.log);
  };

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setFilters(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  if (filters) {
    filters.sort((a: any, b: any) => (a.category > b.category ? 1 : -1));
  }

  const q = query(
    collection(db, "questions"),
    where("subCategory", "==", `${sortState}`)
  );

  const qw = query(
    collection(db, "questions"),
    where("subCategory", "==", `${sortLink.sortLink}`)
  );

  const sortData = async (qt: any) => {
    const querySnapshot = await getDocs(qt);
    setSortGetData(querySnapshot.docs.map((el) => el.data()));
  };

  useEffect(() => {
    if (sortLink.sortLink == undefined) {
      onSnapshot(collection(db, "questions"), (snapshot) =>
        setSortGetData(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, []);

  useEffect(() => {
    if (sort) {
      sortData(q);
      setQuestionSort("");
    }
  }, [sortState]);

  useEffect(() => {
    if (sortLink.sortLink !== undefined) {
      sortData(qw);
    }
  }, []);

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
            {filters ? (
              filters.map((el: any) => {
                return (
                  <Filter
                    setSort={setSort}
                    key={el.category}
                    setSortState={setSortState}
                    category={el.category}
                    subCategory={el.subCategory}
                    onClose={() => {}}
                  />
                );
              })
            ) : (
              <LoaderCategory />
            )}
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
              <Input
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                placeholder={"Хайх асуултаа оруулна уу"}
              />
              <Button
                onClick={() => {
                  setQuestionSort(searchTerm);
                  SaveUserQuestion();
                }}
              >
                Хайх
              </Button>
            </HStack>
          </Flex>
          <QuestionAnswer
            sortGetData={sortGetData}
            questionSort={questionSort}
            buttonActive={buttonActive}
            setButtonActive={setButtonActive}
          />
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
          setSort={setSort}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setSortState={setSortState}
        />
      </Flex>
    </Flex>
  );
}
