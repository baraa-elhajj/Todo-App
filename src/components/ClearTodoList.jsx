import { useTodo } from "@/contexts/TodoContext";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function ClearTodoList() {
  const [loading, setLoading] = useState(false);
  const { clearTodoList } = useTodo();

  const handleOnClick = () => {
    setLoading(true);
    setTimeout(() => {
      clearTodoList();
      setLoading(false);
    }, 1000);
  };

  return (
    <Flex>
      <Button
        color="white"
        bgColor="red.500"
        px="8"
        h="45"
        mt="4"
        onClick={handleOnClick}
        loading={loading}
        loadingText="Clearing"
      >
        Clear
      </Button>
    </Flex>
  );
}
