import { Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <VStack p={4} minH="100vh">
      <Heading mt={20} p={5} fontWeight="extrabold" size="xl" color="blue.400">
      <Heading mt={15} p={5} fontWeight="extrabold" size="2xl" color="blue.400">
        Todo List
      </Heading>
      <AddTodo />
    </VStack>
  );
}

export default App;
