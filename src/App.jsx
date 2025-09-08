import { Heading, VStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <VStack p={4} minH="100vh">
      <Heading mt={20} p={5} fontWeight="extrabold" size="xl" color="blue.400">
        Todo List
      </Heading>
    </VStack>
  );
}

export default App;
