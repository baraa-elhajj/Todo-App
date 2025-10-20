import { HStack, IconButton, Text } from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import { useTodo } from "@/contexts/TodoContext";
import { FaCheck, FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";

export default function TodoItem({ todo }) {
  const { completeTodo } = useTodo();

  const handleOnClick = async () => {
    completeTodo(todo.id, !todo.completed);
  };

  return (
    <HStack
      key={todo.id}
      p="5"
      border="sm"
      borderRadius="lg"
      borderColor="blue.200"
      bgColor={todo.completed ? "#eef8feff" : "white"}
    >
      <Text w="100%" p="8px" color="blue.400">
        {todo.text}
      </Text>

      <DeleteTodo id={todo.id} />
      <EditTodo todo={todo} />
      <IconButton
        rounded="full"
        bgColor={todo.completed ? "green.400" : "blue.400"}
        onClick={handleOnClick}
      >
        <FaCheck />
      </IconButton>
    </HStack>
  );
}
