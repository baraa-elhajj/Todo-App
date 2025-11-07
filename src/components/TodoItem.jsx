import { HStack, IconButton } from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import { useTodo } from "@/contexts/TodoContext";
import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
import EditableItem from "./ui/EditableItem";

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
      <EditableItem todo={todo} />
      <IconButton
        rounded="full"
        bgColor="transparent"
        color={todo.completed ? "green.400" : "blue.400"}
        onClick={handleOnClick}
      >
        {todo.completed ? <FaCircleCheck /> : <FaRegCircleCheck />}
      </IconButton>
      <DeleteTodo id={todo.id} />
    </HStack>
  );
}
