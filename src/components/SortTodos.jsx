import { Group, IconButton, Menu, Text } from "@chakra-ui/react";
import React from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";
import { MdFilterList } from "react-icons/md";

const SortTodos = () => {
  const sortOptions = [
    {
      text: "Oldest to Neweset",
      icon: <HiSortAscending />,
    },
    {
      text: "Neweset to Oldest",
      icon: <HiSortDescending />,
    },
  ];

  return (
    <Menu.Root positioning={{ placement: "top-start" }}>
      <Menu.Trigger asChild>
        <IconButton
          size="md"
          color="blue.400"
          bgColor="transparent"
          _focus={{ outline: "none" }}
        >
          <MdFilterList />
        </IconButton>
      </Menu.Trigger>

      <Menu.Positioner position="relative" zIndex="20">
        <Menu.Content w="auto" p={0}>
          {sortOptions.map((option, index) => (
            <Menu.Item
              key={index}
              cursor="pointer"
              _hover={{ bg: "#e9f7ffff" }}
              //   onClick={() => handleAddTag(tag)}
            >
              <Group>
                {option.icon}
                <Text>{option.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortTodos;
