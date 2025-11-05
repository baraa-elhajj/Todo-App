import { Flex, Heading, Image } from "@chakra-ui/react";
import img from "../assets/todo.jpg";

const Header = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} justify="center">
      <Heading p={5} fontWeight="extrabold" size="3xl" color="blue.400">
        Todo App
      </Heading>
      <Image src={img} maxW={{ base: "60%", md: "300px" }} />
    </Flex>
  );
};

export default Header;
