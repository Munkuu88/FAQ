import { Flex, VStack } from "@chakra-ui/react";
import { CategoryBoxs } from "../component/categoryBox";
import { maxWidth } from "../theme";

export function HomePage() {
  return (
    <Flex justifyContent={"center"}>
      <VStack alignItems={"unset"} maxW={maxWidth} w="100%">
        <CategoryBoxs />
      </VStack>
    </Flex>
  );
}
