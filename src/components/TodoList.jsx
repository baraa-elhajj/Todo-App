import { Flex, Heading, Image, StackSeparator, VStack } from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import img from "../assets/todo.jpg";
import { useTodo } from "@/contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todoList } = useTodo();

  return (
    <>
      <Flex justify="center">
        <Image src={img} maxW={{ base: "60%", md: "300px" }} />
      </Flex>

      {todoList.length !== 0 ? (
        <>
          <VStack
            separator={<StackSeparator />}
            borderColor="blue.100"
            borderWidth="2px"
            p="5"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "60vw", lg: "50vw", xl: "35vw" }}
            alignItems="stretch"
          >
            {todoList.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </VStack>
          <ClearTodoList />
        </>
      ) : (
        <Heading
          mt={15}
          p={5}
          fontWeight="extrabold"
          size="lg"
          color="blue.400"
        >
          All done! Nothing todo for now ...
        </Heading>
      )}
    </>
  );
}
