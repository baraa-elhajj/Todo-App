import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodo } from "./contexts/TodoContext";
import ErrorAlert from "./components/ui/ErrorAlert";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";

function App() {
  const { error, setError } = useTodo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <VStack p={4} minH="100vh">
        <Heading p={5} fontWeight="extrabold" size="3xl" color="blue.400">
          Todo App
        </Heading>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error && <ErrorAlert error={error} setError={setError} />}
            <AddTodo />
            <TodoList />
          </>
        )}
      </VStack>
      <ScrollToTopButton />
    </>
  );
}

export default App;
