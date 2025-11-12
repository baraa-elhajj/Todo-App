import { Group, IconButton, Menu, Portal, Text } from "@chakra-ui/react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";

const SortTodos = ({ sortMethod, setSortMethod }) => {
  const sortOptions = [
    {
      text: "Oldest to Newest",
      icon: <HiSortAscending />,
    },
    {
      text: "Neweset to Oldest",
      icon: <HiSortDescending />,
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
          <MdFilterList />
        </IconButton>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner position="relative" zIndex="20">
          <Menu.Content w="auto" p={0}>
            {sortOptions.map((option, index) => (
              <Menu.Item
                key={index}
                cursor="pointer"
                color="blue.400"
                bg={index === sortMethod ? "#f0f9ffff" : "transparent"}
                _hover={{ bg: "#f0f9ffff" }}
                onClick={() => setSortMethod(index)}
              >
                <Group>
                  {option.icon}
                  <Text>{option.text}</Text>
                </Group>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortTodos;
