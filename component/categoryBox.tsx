import {
  Flex,
  SimpleGrid,
  Text,
  Collapse,
  Button,
  List,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { db } from "../firebase/clientApp";
import Link from "next/link";

const CategoryBox = ({ detail }: any) => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={
        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
      }
      p={[5, 10]}
      borderRadius={"lg"}
    >
      <VStack w="100%" alignItems={"unset"} spacing={"20px"}>
        <Text fontSize={"xl"} fontWeight={"500"}>
          {detail.category}
        </Text>
        <Collapse startingHeight={80} in={show}>
          <List>
            {detail.subCategory.map((el: any) => {
              return (
                <Link href={`search?sort=${el.link}`} key={el.link}>
                  <HStack cursor={"pointer"} alignItems={"center"}>
                    <Icon as={FaCheck} color="green.500" />
                    <Text>{el.text}</Text>
                  </HStack>
                </Link>
              );
            })}
          </List>
        </Collapse>
        <Button onClick={() => setShow(!show)}>
          {show ? "Less" : "Show more"}
        </Button>
      </VStack>
    </Flex>
  );
};

export function CategoryBoxs() {
  const [categoryData, setCategoryData] = useState<any>([]);

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setCategoryData(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  categoryData.sort((a: any, b: any) => (a.category > b.category ? 1 : -1));

  return (
    <SimpleGrid columns={[1, 3]} gap={[6, 8]}>
      {categoryData &&
        categoryData.map((el: any) => {
          return <CategoryBox key={el.category} detail={el} />;
        })}
    </SimpleGrid>
  );
}
