import { toaster } from "@/components/ui/toaster";
import {
  addTodoDB,
  clearTodoListDB,
  completeTodoDB,
  deleteTodoDB,
  fetchTodoListDB,
  updateTodoDB,
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

  const clearTodoList = async () => {
    try {
      await clearTodoListDB();
      setTodoList([]);
      toaster.create({
        title: "Todo list cleared",
        type: "success",
        duration: 2000,
      });
    } catch (error) {
      setError("Failed to clear todo list. Try again.");
      console.error(error);
    }
  };

  const editTodo = async (id, newText) => {
    try {
      const updatedTodo = await updateTodoDB(id, newText);
      setTodoList(
        todoList.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
      toaster.create({
        title: "Todo updated",
        type: "success",
        duration: 1000,
      });
    } catch (error) {
      setError("Failed to update todo. Try again.");
      console.error(error);
    }
  };

  const completeTodo = async (id, isCompleted) => {
    try {
      const updatedTodo = await completeTodoDB(id, isCompleted);
      setTodoList(
        todoList.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
      if (isCompleted) {
        toaster.create({
          title: "Good Job! Todo Completed",
          type: "success",
          duration: 2000,
        });
      }
    } catch (error) {
      setError("Failed to set todo as completed/uncompleted. Try again.");
      console.error(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        deleteTodo,
        clearTodoList,
        editTodo,
        completeTodo,
        error,
        setError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Custom context hook
export function useTodo() {
  return useContext(TodoContext);
}
