import { toaster } from "@/components/ui/toaster";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
const TODO_LIST_LOCAL_STORAGE_KEY = "todoList";
const TAG_LIST_LOCAL_STORAGE_KEY = "tagList";

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    try {
      const storedTodos =
        JSON.parse(localStorage.getItem(TODO_LIST_LOCAL_STORAGE_KEY)) || [];
      const storedTags =
        JSON.parse(localStorage.getItem(TAG_LIST_LOCAL_STORAGE_KEY)) || [];

      const sorted = storedTodos.sort((a, b) => a.id - b.id);
      setTodoList(sorted);
      setTagsList(storedTags);
      setLoaded(true);
    } catch (err) {
      setError("Failed to load todos/tags from local storage.");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(
          TODO_LIST_LOCAL_STORAGE_KEY,
          JSON.stringify(todoList)
        );
        localStorage.setItem(
          TAG_LIST_LOCAL_STORAGE_KEY,
          JSON.stringify(tagsList)
        );
      } catch (err) {
        console.error("Failed to save todos/tags to local storage.", err);
      }
    }
  }, [todoList, tagsList, loaded]);

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

  const addTag = (id, tag) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, tags: [...todo.tags, tag] } : todo
      )
    );
  };

  const deleteTag = (id, tag) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, tags: todo.tags.filter((t) => t !== tag) }
          : todo
      )
    );
  };

  const addToTagsList = (text) => {
    setTagsList((prev) => [...prev, text]);
    toaster.create({
      title: "Tag Added",
      type: "success",
      duration: 2000,
    });
  };

  const value = {
    todoList,
    tagsList,
    addTodo,
    deleteTodo,
    clearTodoList,
    editTodo,
    completeTodo,
    addTag,
    deleteTag,
    addToTagsList,
    error,
    setError,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  return useContext(TodoContext);
}
