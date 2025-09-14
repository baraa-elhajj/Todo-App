import {
  Flex,
  Heading,
  Image,
  Spinner,
  StackSeparator,
  VStack,
} from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import img from "../assets/todo.jpg";
import { useTodo } from "@/contexts/TodoContext";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todoList } = useTodo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (todoList) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [todoList]);

  if (loading) {
    return (
      <>
        <DotLottieReact
          src="https://lottie.host/1d57a315-e7df-4284-b98f-11271d96febf/Mlv6dHYkpZ.lottie"
          loop
          autoplay
          style={{ width: "40%", height: "auto" }}
        />
        <Heading
          mt={15}
          p={5}
          fontWeight="extrabold"
          size="xl"
          color="blue.400"
        >
          Fetching todo list <Spinner />
        </Heading>
      </>
    );
  }

  return (
    <>
      <Flex justify="center">
        <Image src={img} maxW="30%" />
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
            maxW={{ base: "90vw", sm: "60vw", lg: "50vw", xl: "40vw" }}
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
