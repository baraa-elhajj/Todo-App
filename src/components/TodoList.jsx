// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Flex,
  Group,
  Heading,
  IconButton,
  Stack,
  StackSeparator,
  VStack,
} from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import { useTodo } from "@/contexts/TodoContext";
import TodoItem from "./TodoItem";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import { MdFilterList, MdFilterListAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import { TbTagPlus } from "react-icons/tb";
import AddTags from "./AddTags";

export default function TodoList() {
  const { todoList } = useTodo();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);

  const filteredList = todoList.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Flex
        direction="column"
        align="flex-end"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "35vw" }}
        ml="3"
      >
        <Group>
          <AnimatePresence initial={false}>
            {isSearchOpen && (
              <SearchTodo
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            )}
          </AnimatePresence>
          <IconButton
            bgColor="transparent"
            color="blue.400"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <LuSearch />
          </IconButton>
          <IconButton bgColor="transparent" color="blue.400">
            <MdFilterListAlt />
          </IconButton>
          <IconButton bgColor="transparent" color="blue.400">
            <MdFilterList />
          </IconButton>
          <IconButton
            bgColor="transparent"
            color="blue.400"
            transform="scaleX(-1)"
            onClick={() => setIsAddTagOpen((prev) => !prev)}
          >
            <TbTagPlus />
          </IconButton>
          <IconButton
            bgColor="transparent"
            color="blue.400"
            onClick={() => setIsAddOpen((prev) => !prev)}
          >
            <FaPlus />
          </IconButton>
        </Group>
      </Flex>
      <Box>
        <AnimatePresence>{isAddOpen && <AddTodo />}</AnimatePresence>
        <AnimatePresence>{isAddTagOpen && <AddTags />}</AnimatePresence>
      </Box>
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
