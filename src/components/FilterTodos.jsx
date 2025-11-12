import { useTodo } from "@/contexts/TodoContext";
import {
  Box,
  Checkbox,
  IconButton,
  Menu,
  Portal,
  RadioGroup,
  StackSeparator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdFilterListAlt } from "react-icons/md";

const FilterTodos = ({
  statusFilter,
  setStatusFilter,
  tagsFilter,
  setTagsFilter,
}) => {
  const { tagsList } = useTodo();

  const statues = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Pending",
      value: "pending",
    },
  ];

  return (
    <Menu.Root positioning={{ placement: "right-end" }}>
      <Menu.Trigger asChild>
        <IconButton
          size="md"
          color="blue.400"
          _hover={{ color: "blue.500" }}
          bgColor="transparent"
          _focus={{ outline: "none" }}
        >
          <MdFilterListAlt />
        </IconButton>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content w="auto" pb="4" bg="white" boxShadow="lg">
            <VStack separator={<StackSeparator />} borderColor="blue.100">
              <Box p="2">
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="blue.400"
                  mb={1}
                >
                  Status
                </Text>
                <RadioGroup.Root
                  size="sm"
                  color="blue.400"
                  colorPalette="blue"
                  value={statusFilter}
                  onValueChange={(e) => setStatusFilter(e.value)}
                >
                  <VStack align="start">
                    {statues.map((item) => (
                      <RadioGroup.Item key={item.value} value={item.value}>
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator cursor="pointer" />
                        <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    ))}
                  </VStack>
                </RadioGroup.Root>
              </Box>

              <Box w="85%" align="flex-start">
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="blue.400"
                  mb={1}
                >
                  Tags
                </Text>
                <VStack align="start">
                  {tagsList.map((tag, index) => (
                    <Checkbox.Root
                      key={index}
                      size="sm"
                      colorPalette="blue"
                      color="blue.400"
                      checked={tagsFilter.includes(tag)}
                      onCheckedChange={(e) => {
                        if (e.checked) {
                          setTagsFilter([...tagsFilter, tag]);
                        } else {
                          setTagsFilter(tagsFilter.filter((t) => t !== tag));
                        }
                      }}
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control cursor="pointer" />
                      <Checkbox.Label>{tag}</Checkbox.Label>
                    </Checkbox.Root>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default FilterTodos;
