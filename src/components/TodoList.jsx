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
// import { useEffect, useState } from "react";
// import supabase from "@/supabase-client";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  //   const fetchTodoList = async () => {
  //     const { data, error } = await supabase.from("todo").select("*");

  //     if (error) {
  //       console.log("Error fetching todo list: ", error);
  //     } else {
  //       setTodoList(data);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchTodoList();
  //   }, []);

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
