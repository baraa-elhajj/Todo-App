import {
  CloseButton,
  Flex,
  Group,
  Heading,
  IconButton,
  Input,
  InputGroup,
  StackSeparator,
  VStack,
} from "@chakra-ui/react";
import ClearTodoList from "./ClearTodoList";
import { useTodo } from "@/contexts/TodoContext";
import TodoItem from "./TodoItem";
import { LuSearch } from "react-icons/lu";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdFilterList, MdFilterListAlt } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export default function TodoList() {
  const { todoList } = useTodo();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = (useRef < HTMLInputElement) | (null > null);
  const [isOpen, setIsOpen] = useState(false);

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
      me="-1"
    />
  ) : undefined;

  return (
    <>
      <Flex
        justify="flex-end"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "35vw" }}
        ml="3"
      >
        <Group>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="input"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "25vw", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <InputGroup endElement={endElement}>
                  <Input
                    autoFocus
                    variant="outline"
                    colorPalette="blue"
                    borderColor="blue.100"
                    placeholder="Search tasks"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </motion.div>
            )}
          </AnimatePresence>
          <IconButton
            bgColor="transparent"
            color="blue.400"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <LuSearch />
          </IconButton>
          <IconButton bgColor="transparent" color="blue.400">
            <MdFilterListAlt />
          </IconButton>
          <IconButton bgColor="transparent" color="blue.400">
            <MdFilterList />
          </IconButton>
          {/* TODO: move addTodo here */}
          {/* <IconButton bgColor="transparent" color="blue.400">
            <FaPlus />
          </IconButton> */}
        </Group>
      </Flex>

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
