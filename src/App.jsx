import { Box, Heading, VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodo } from "./contexts/TodoContext";
import ErrorAlert from "./components/ui/ErrorAlert";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const { error, setError } = useTodo();

  return (
    <>
      <VStack p={4} minH="100vh">
        <Heading p={5} fontWeight="extrabold" size="3xl" color="blue.400">
          Todo App
        </Heading>
        {error && <ErrorAlert error={error} setError={setError} />}
        <AddTodo />
        <TodoList />
      </VStack>
      <ScrollToTopButton />
    </>
  );
}

export default App;
