import { useTodo } from "@/contexts/TodoContext";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();

  const handleOnClick = () => {
    console.log("AddTodo: Adding todo");
    addTodo(input);
    setInput("");
  };

  return (
    <HStack h={45}>
      <Input
        h="100%"
        variant="outline"
        placeholder="What are you up for today?"
        colorPalette="blue"
        w="xs"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        size="sm"
        color="white"
        bgColor="blue.500"
        px={10}
        h="100%"
        type="submit"
        onClick={handleOnClick}
      >
        Add
      </Button>
    </HStack>
  );
}
