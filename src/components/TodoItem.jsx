import { CheckboxCard, HStack, Text } from "@chakra-ui/react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import { useTodo } from "@/contexts/TodoContext";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const { completeTodo } = useTodo();
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleOnChange = async (checked) => {
    setIsCompleted(checked);
    completeTodo(todo.id, checked);
  };

  return (
    <HStack key={todo.id}>
      <CheckboxCard.Root
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
      </CheckboxCard.Root>
    </HStack>
  );
}
