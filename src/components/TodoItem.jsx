import { CheckboxCard, HStack, Text } from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import { useTodo } from "@/contexts/TodoContext";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const { completeTodo } = useTodo();
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleOnClick = async () => {
    setIsCompleted(!isCompleted);
    completeTodo(todo.id, !isCompleted);
  };

  return (
    // TODO: Implement checkbox card functionality
    <HStack
      key={todo.id}
      p="5"
      border="sm"
      borderRadius="lg"
      borderColor="blue.200"
      bgColor={todo.isCompleted ? "blue.100" : "white"}
      onClick={handleOnClick}
    >
      <Text w="100%" p="8px" color="blue.400">
        {todo.text}
      </Text>
      <DeleteTodo id={todo.id} />
      <EditTodo todo={todo} />
      {/* <CheckboxCard.Root
        key={todo.id}
        variant="surface"
        colorPalette="blue"
        borderColor="blue.100"
        checked={isCompleted}
        onChange={(e) => handleOnChange(e.target.checked)}
      >
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>
            <Text w="100%" p="8px" borderRadius="lg" color="blue.400">
              {todo.text}
            </Text>
            <DeleteTodo id={todo.id} />
            <EditTodo todo={todo} />
          </CheckboxCard.Label>
        </CheckboxCard.Control>
      </CheckboxCard.Root> */}
    </HStack>
  );
}
