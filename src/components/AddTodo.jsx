import { useTodo } from "@/contexts/TodoContext";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();

  const handleOnClick = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <HStack h={45}>
      <Input
        h="100%"
        variant="outline"
        colorPalette="blue"
        w="xs"
        placeholder="What are you up for today?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
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
