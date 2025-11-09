import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Box, Flex, Group, IconButton } from "@chakra-ui/react";
import { MdFilterList, MdFilterListAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { TbTagPlus } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import AddTags from "./AddTags";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";

const ActionPanel = ({ values }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);

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
                searchTerm={values.searchTerm}
                setSearchTerm={values.setSearchTerm}
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
    </>
  );
};

export default ActionPanel;
