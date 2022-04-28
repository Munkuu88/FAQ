import { Skeleton, VStack, Box } from "@chakra-ui/react";

export function LoaderCategory() {
  return (
    <VStack alignItems={"unset"}>
      <VStack alignItems={"unset"}>
        <Skeleton h="30px" w="100%" />
        {[0, 1, 3, 4].map((el) => {
          return (
            <Box pl="30px" key={el}>
              <Skeleton key={el} h="28px" />
            </Box>
          );
        })}
      </VStack>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
        return (
          <Box py="3px" key={el}>
            <Skeleton h="30px" w="100%" key={el} />
          </Box>
        );
      })}
    </VStack>
  );
}
