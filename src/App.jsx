import { Heading, VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodo } from "./contexts/TodoContext";
import ErrorAlert from "./components/ui/ErrorAlert";

function App() {
  const { error, setError } = useTodo();

  return (
    <VStack p={4} minH="100vh">
      <Heading mt={15} p={5} fontWeight="extrabold" size="3xl" color="blue.400">
        Todo App
      </Heading>
      {error && <ErrorAlert error={error} setError={setError} />}
      <AddTodo />
      <TodoList />
    </VStack>
  );
}

export default App;
