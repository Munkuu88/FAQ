import { createStandaloneToast } from "@chakra-ui/react";

const toast: Function = createStandaloneToast({});

export const Toaster = ({ title, desc, status }: any) => {
  toast({
    title: title,
    description: desc,
    status: status,
    duration: 5000,
    isClosable: true,
  });
};
