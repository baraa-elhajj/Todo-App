import { useState } from "react";
import { Box, HStack, Badge, IconButton, Text, Menu } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useTodo } from "@/contexts/TodoContext";
import { IoMdPricetags } from "react-icons/io";
import { randomColor } from "@/utils/colorHelper";

const AddTodoTags = ({ id, tags }) => {
  const { tagsList, addTag, deleteTag } = useTodo();
  const [selectedTags, setSelectedTags] = useState(tags || []);

  const handleAddTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      addTag(id, tag);
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    deleteTag(id, tag);
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const availableTags = tagsList.filter((t) => !selectedTags.includes(t));

  return (
    <Box w="98%">
      <HStack justifyContent="flex-start" flexWrap="wrap">
        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton
              size="xs"
              color="blue.400"
              bgColor="transparent"
              _focus={{ outline: "none" }}
            >
              <IoMdPricetags />
            </IconButton>
          </Menu.Trigger>

          <Menu.Positioner>
            <Menu.Content w="50px" p={0}>
              {availableTags.length > 0 ? (
                availableTags.map((tag) => (
                  <Menu.Item
                    key={tag}
                    cursor="pointer"
                    _hover={{ bg: "#e9f7ffff" }}
                    onClick={() => handleAddTag(tag)}
                  >
                    {tag}
                  </Menu.Item>
                ))
              ) : (
                <Text fontSize="xs" px={1} py={2} color="gray.500">
                  No tags available
                </Text>
              )}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
        {selectedTags.map((tag) => (
          <Badge
            key={tag}
            bg={randomColor(tag)}
            borderRadius="md"
            alignItems="center"
            pr={-3}
          >
            <Text color="#828e9bff" mr={1}>
              {tag}
            </Text>
            <IconButton
              aria-label={`Remove tag ${tag}`}
              size="2xs"
              variant="ghost"
              color="#62727dff"
              bgColor="transparent"
              onClick={() => handleRemoveTag(tag)}
            >
              <AiOutlineClose />
            </IconButton>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};

export default AddTodoTags;
