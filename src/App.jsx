import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Header from "./components/Header";
import ErrorAlert from "./components/ui/ErrorAlert";
import Loader from "./components/ui/Loader";

import { useTodo } from "./contexts/TodoContext";

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
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
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
