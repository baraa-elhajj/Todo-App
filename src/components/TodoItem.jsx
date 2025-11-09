import {
  Box,
  Em,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import { useTodo } from "@/contexts/TodoContext";
import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
import EditTodo from "./EditTodo";
import { GetCurrentDateString } from "@/utils/dateHelper";
import AddTodoTags from "./AddTodoTags";

export default function TodoItem({ todo }) {
  const { completeTodo } = useTodo();

  const handleOnClick = async () => {
    completeTodo(todo.id, !todo.isCompleted);
  };

  return (
    <VStack
      key={todo.id}
      border="sm"
      borderRadius="lg"
      borderColor="blue.200"
      p="5"
      bgColor={todo.isCompleted ? "#eef8feff" : "white"}
    >
      <HStack w="100%">
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
      <Box mt="2" w="95%" textAlign="right">
        <Text fontSize="xs" color="blue.400">
          {/* Date.now() to prevent errors for old todos, remove later */}
          <Em>{GetCurrentDateString(todo?.dateCreated)}</Em>
        </Text>
      </Box>
      <AddTodoTags id={todo.id} tags={todo.tags} />
    </VStack>
  );
}
