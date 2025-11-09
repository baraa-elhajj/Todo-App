import { useTodo } from "@/contexts/TodoContext";
import { Button, HStack, Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "./ui/toaster";
import { motion } from "framer-motion";

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
    <motion.div
      key="add-input"
      initial={{ opacity: 0, y: -10, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "50px" }}
      exit={{ opacity: 0, y: -10, height: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <HStack h={45} justify="center">
        <Input
          h="85%"
          variant="outline"
          colorPalette="blue"
          borderColor="blue.100"
          w={{ base: "65%", md: "25vw" }}
          placeholder="What are you up for today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
          disabled={loading}
          autoFocus
        />
        <Button
          size="sm"
          w={{ base: "25%", md: "20%" }}
          color="white"
          bgColor="blue.400"
          px={10}
          h="85%"
          type="submit"
          onClick={handleOnClick}
          disabled={loading}
        >
          {loading ? (
            <HStack gap={2} justify="center">
              <Spinner size="sm" /> Adding
            </HStack>
          ) : (
            "Add"
          )}
        </Button>
      </HStack>
    </motion.div>
  );
}
