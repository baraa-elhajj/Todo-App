import { useTodo } from "@/contexts/TodoContext";
import { HStack, TagsInput } from "@chakra-ui/react";
import { toaster } from "./ui/toaster";
import { motion } from "framer-motion";
import { randomColor } from "@/utils/colorHelper";

const AddTags = () => {
  const { tagsList, addToTagsList, deleteFromTagsList } = useTodo();

  const handleAddTag = (value) => {
    if (!value.trim()) {
      toaster.create({
        title: "Add something first!",
        type: "warning",
        duration: 2000,
      });
      return;
    }

    addToTagsList(value);
  };

  return (
    <motion.div
      key="add-tag-input"
      initial={{ opacity: 0, y: -10, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "50px" }}
      exit={{ opacity: 0, y: -10, height: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <HStack mb={5} justify="center">
        <TagsInput.Root
          defaultValue={tagsList}
          variant="outline"
          colorPalette="blue"
          w={{ base: "93%", md: "32vw" }}
          my={2}
          autoFocus
        >
          <TagsInput.Control borderColor="blue.100">
            <TagsInput.Context>
              {({ value }) =>
                value.map((tag, index) => (
                  <TagsInput.Item key={index} index={index} value={tag}>
                    <TagsInput.ItemPreview bgColor={randomColor(tag)}>
                      <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger
                        onClick={() => deleteFromTagsList(tag)}
                      />
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
                  </TagsInput.Item>
                ))
              }
            </TagsInput.Context>
            <TagsInput.Input
              placeholder="Add tags"
              onKeyDown={(e) =>
                e.key === "Enter" && handleAddTag(e.target.value)
              }
            />
          </TagsInput.Control>
        </TagsInput.Root>
      </HStack>
    </motion.div>
  );
};

export default AddTags;
