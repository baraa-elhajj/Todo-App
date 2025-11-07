import {
  CloseButton,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Kbd,
  StackSeparator,
  VStack,
} from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import { useTodo } from "@/contexts/TodoContext";
import TodoItem from "./TodoItem";
import { LuSearch } from "react-icons/lu";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList() {
  const { todoList } = useTodo();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = (useRef < HTMLInputElement) | (null > null);

  const filteredList = todoList.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const endElement = searchTerm ? (
    <CloseButton
      size="xs"
      color="blue.400"
      onClick={() => {
        setSearchTerm("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  return (
    <>
      <InputGroup
        endElement={endElement}
        w={{ base: "2xs", md: "lg" }}
        mb="3"
        startElement={<LuSearch />}
      >
        <Input
          variant="outline"
          colorPalette="blue"
          borderColor="blue.100"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {filteredList.length !== 0 ? (
        <>
          <AnimatePresence mode="popLayout">
            <VStack
              separator={<StackSeparator />}
              borderColor="blue.100"
              borderWidth="2px"
              p="5"
              borderRadius="lg"
              w="100%"
              maxW={{ base: "90vw", sm: "60vw", lg: "50vw", xl: "35vw" }}
              alignItems="stretch"
            >
              {filteredList.map((todo) => (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <TodoItem todo={todo} />
                </motion.div>
              ))}
            </VStack>
            <ClearTodoList />
          </AnimatePresence>
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
