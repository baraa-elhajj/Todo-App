import { Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <VStack p={4} minH="100vh">
      <Heading mt={15} p={5} fontWeight="extrabold" size="3xl" color="blue.400">
        Todo App
      </Heading>
      <AddTodo />
      <TodoList />
    </VStack>
  );
}

export default App;
