import { Skeleton, Flex, VStack } from "@chakra-ui/react";

export const CategoryBoxLoader = ({ detail }: any) => {
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
        <Skeleton h="30px" w="150px" />
        <VStack spacing={"5px"} alignItems={"unset"}>
          {[0, 1, 2].map((el) => {
            return <Skeleton key={el} w="250px" h="24px" />;
          })}
        </VStack>
        <Skeleton w="100%" h="40px" borderRadius={"sm"} />
      </VStack>
    </Flex>
  );
};
