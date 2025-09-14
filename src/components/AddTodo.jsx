import { useTodo } from "@/contexts/TodoContext";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "./ui/toaster";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { addTodo } = useTodo();

  const handleOnClick = () => {
    if (!input.trim()) {
      toaster.create({
        title: "Add something first!",
        type: "warning",
        duration: 2000,
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      addTodo(input);
      setLoading(false);
      setInput("");
    }, 1000);
  };

  return (
    <HStack h={45}>
      <Input
        h="100%"
        variant="outline"
        colorPalette="blue"
        borderColor="blue.100"
        w="xs"
        placeholder="What are you up for today?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
        disabled={loading}
      />
      <Button
        size="sm"
        color="white"
        bgColor="blue.400"
        px={10}
        h="100%"
        type="submit"
        onClick={handleOnClick}
        loading={loading}
        loadingText="Adding"
      >
        Add
      </Button>
    </HStack>
  );
}
