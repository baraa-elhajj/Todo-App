import { HStack, IconButton, Stack } from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import { useTodo } from "@/contexts/TodoContext";
import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
import EditTodo from "./EditTodo";

export default function TodoItem({ todo }) {
  const { completeTodo } = useTodo();

  const handleOnClick = async () => {
    completeTodo(todo.id, !todo.isCompleted);
  };

  return (
    <HStack
      key={todo.id}
      p="5"
      border="sm"
      borderRadius="lg"
      borderColor="blue.200"
      bgColor={todo.isCompleted ? "#eef8feff" : "white"}
    >
      <EditTodo todo={todo} />
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={2}
        align="center"
      >
        <IconButton
          rounded="full"
          bgColor="transparent"
          color={todo.isCompleted ? "green.400" : "blue.400"}
          onClick={handleOnClick}
        >
          {todo.isCompleted ? <FaCircleCheck /> : <FaRegCircleCheck />}
        </IconButton>
        <DeleteTodo id={todo.id} />
      </Stack>
    </HStack>
  );
}
