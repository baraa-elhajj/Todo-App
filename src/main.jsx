import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "./components/ui/toaster";
import { TodoProvider } from "./contexts/TodoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <TodoProvider>
        <App />
        <Toaster />
      </TodoProvider>
    </ChakraProvider>
  </StrictMode>
);
