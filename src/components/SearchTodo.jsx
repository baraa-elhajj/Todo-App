import { useRef } from "react";
import { motion } from "framer-motion";
import { CloseButton, Input, InputGroup } from "@chakra-ui/react";

const SearchTodo = ({ searchTerm, setSearchTerm }) => {
  const inputRef = (useRef < HTMLInputElement) | (null > null);

  const endElement = searchTerm ? (
    <CloseButton
      size="xs"
      color="blue.400"
      bgColor="transparent"
      onClick={() => {
        setSearchTerm("");
        inputRef.current?.focus();
      }}
      me="-1"
    />
  ) : undefined;

  return (
    <motion.div
      key="input"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "18vw", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <InputGroup endElement={endElement}>
        <Input
          variant="outline"
          colorPalette="blue"
          borderColor="blue.100"
          placeholder="Search tasks"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </motion.div>
  );
};

export default SearchTodo;
