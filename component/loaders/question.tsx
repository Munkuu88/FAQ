import { Skeleton, Box } from "@chakra-ui/react";

export function LoaderQuestion() {
  return (
    <Box py="10px">
      <Skeleton borderRadius={"sm"} h="40px" w="100%" />
    </Box>
  );
}
