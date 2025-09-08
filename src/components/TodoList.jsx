import {
  Flex,
  HStack,
  Image,
  StackSeparator,
  Text,
  VStack,
} from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import DeleteTodo from "./DeleteTodo";
import img from "../assets/todo.jpg";

export default function TodoList() {
  return (
    <>
      <Flex justify="center">
        <Image src={img} maxW="30%" />
      </Flex>
      <VStack
        separator={<StackSeparator />}
        borderColor="blue.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        <HStack>
          <Text w="100%" p="8px" borderRadius="lg" color="blue.400">
            Work on task no.2
          </Text>
          <DeleteTodo />
        </HStack>
        <HStack>
          <Text w="100%" p="8px" borderRadius="lg" color="blue.400">
            Buy food for lunch
          </Text>
          <DeleteTodo />
        </HStack>
        <HStack>
          <Text w="100%" p="8px" borderRadius="lg" color="blue.400">
            Visit my friend
          </Text>
          <DeleteTodo />
        </HStack>
      </VStack>
      <ClearTodoList />
    </>
  );
}
