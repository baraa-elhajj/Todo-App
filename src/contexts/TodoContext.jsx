import { toaster } from "@/components/ui/toaster";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
const LOCAL_STORAGE_KEY = "todoList";

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedTodos =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const sorted = storedTodos.sort((a, b) => a.id - b.id);
      setTodoList(sorted);
      setLoaded(true);
    } catch (err) {
      setError("Failed to load todos from local storage.");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
      } catch (err) {
        console.error("Failed to save todos to local storage.", err);
      }
    }
  }, [todoList, loaded]);

  const addTodo = (text) => {
    const newTodo = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      text,
      isCompleted: false,
      dateCreated: Date.now(),
      tags: [],
    };
    setTodoList((prev) => [...prev, newTodo]);
    toaster.create({
      title: "Task Added",
      type: "success",
      duration: 2000,
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    toaster.create({
      title: "Task Deleted",
      type: "success",
      duration: 2000,
    });
  };

  const clearTodoList = () => {
    setTodoList([]);
    toaster.create({
      title: "All Tasks Cleared",
      type: "success",
      duration: 2000,
    });
  };

  const editTodo = (id, newText) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    toaster.create({
      title: "Task Updated",
      type: "success",
      duration: 2000,
    });
  };

  const completeTodo = (id, isCompleted) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: isCompleted } : todo
      )
    );
    if (isCompleted) {
      toaster.create({
        title: "Good Job! Task Completed",
        type: "success",
        duration: 2000,
      });
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

export function useTodo() {
  return useContext(TodoContext);
}
