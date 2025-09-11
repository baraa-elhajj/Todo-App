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
import { useTodo } from "@/contexts/TodoContext";

export default function TodoList() {
  const { todoList } = useTodo();

  return (
    <>
      <Flex justify="center">
        <Image src={img} maxW="30%" />
      </Flex>

      {todoList.length !== 0 && (
        <>
          <VStack
            separator={<StackSeparator />}
            borderColor="blue.100"
            borderWidth="2px"
            p="5"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "60vw", lg: "50vw", xl: "30vw" }}
            alignItems="stretch"
          >
            {todoList.map((todo) => (
              <HStack key={todo.id}>
                <Text w="100%" p="8px" borderRadius="lg" color="blue.400">
                  {todo.text}
                </Text>
                <DeleteTodo id={todo.id} />
              </HStack>
            ))}
          </VStack>
          <ClearTodoList />
        </>
      )}
    </>
  );
}
