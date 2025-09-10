import {
  addTodoDB,
  deleteTodoDB,
  fetchTodoListDB,
} from "@/services/todoService";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      const data = await fetchTodoListDB();
      setTodoList(data);
    }

    loadTodos();
  }, []);

  const addTodo = async (text) => {
    if (!text.trim()) return;
    const newTodo = await addTodoDB(text);
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = async (id) => {
    await deleteTodoDB(id);
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom context hook
export function useTodo() {
  return useContext(TodoContext);
}
