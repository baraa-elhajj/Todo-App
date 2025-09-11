import { toaster } from "@/components/ui/toaster";
import {
  addTodoDB,
  deleteTodoDB,
  fetchTodoListDB,
} from "@/services/todoService";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTodos() {
      try {
        const data = await fetchTodoListDB();
        setTodoList(data);
      } catch (error) {
        setError("Failed to fetch todo list. Try refreshing the page.");
        console.error(error);
      }
    }

    loadTodos();
  }, []);

  const addTodo = async (text) => {
    if (!text.trim()) {
      // Add a toaster
      return;
    }
    try {
      const newTodo = await addTodoDB(text);
      setTodoList((prev) => [...prev, newTodo]);
      toaster.create({
        title: "Todo added",
        type: "success",
        duration: 2000,
      });
    } catch (error) {
      setError("Failed to add todo. Try again.");
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoDB(id);
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
      toaster.create({
        title: "Todo deleted",
        type: "success",
        duration: 2000,
      });
    } catch (error) {
      setError("Failed to delete todo. Try again.");
      console.error(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, deleteTodo, error, setError }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Custom context hook
export function useTodo() {
  return useContext(TodoContext);
}
