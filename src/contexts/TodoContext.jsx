import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodoList((prev) => [...prev, text]);
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom context hook
export const useTodo = () => useContext(TodoContext);
