import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    console.log("TodoContext: Adding todo");
    if (!text.trim()) return;
    setTodoList((prev) => [...prev, text]);
  };

  const deleteTodo = (id) => {
    console.log("TodoContext: Deleting todo");
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
