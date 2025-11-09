// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Heading, StackSeparator, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useTodo } from "@/contexts/TodoContext";
import ClearTodoList from "./ClearTodoList";
import TodoItem from "./TodoItem";
import ActionPanel from "./ActionPanel";

export default function TodoList() {
  const { todoList } = useTodo();
  const [searchTerm, setSearchTerm] = useState("");

  const actionPanelValues = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
  };

  const filteredList = todoList.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ActionPanel values={actionPanelValues} />
      {filteredList.length !== 0 ? (
        <>
          <VStack
            separator={<StackSeparator />}
            borderColor="blue.100"
            borderWidth="2px"
            p="5"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "35vw" }}
            alignItems="stretch"
          >
            {filteredList.map((todo) => (
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <TodoItem todo={todo} />
                </motion.div>
              </AnimatePresence>
            ))}
          </VStack>
          <ClearTodoList />
        </>
      ) : (
        <Heading
          mt={15}
          p={5}
          fontWeight="extrabold"
          size="lg"
          color="blue.400"
        >
          No more tasks! Add some ...
        </Heading>
      )}
    </>
  );
}
