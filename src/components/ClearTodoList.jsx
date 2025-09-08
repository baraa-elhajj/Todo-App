import { Button, Flex } from "@chakra-ui/react";

export default function ClearTodoList() {
  return (
    <Flex>
      <Button color="white" bgColor="red.500" px="8" h="45" mt="4">
        Clear
      </Button>
    </Flex>
  );
}
