# Todo App

A simple **full-stack Todo application** built with **React**, **Supabase**, **Chakra UI**, and **React Context API**.  
This project demonstrates clean state management, database integration, and a modular architecture.

---

## Features

- Add, view, edit and delete todos
- Clear all todos in one click
- Persistent storage with [Supabase](https://supabase.com)
- Global state management using React Context
- Beautiful UI with [Chakra UI](https://chakra-ui.com)
- Loading indicators for a smooth UX
- Organized project structure with services and contexts

---

## Tech Stack

- **Frontend:** React + Vite
- **Database:** [Supabase](https://supabase.com/) (Postgres)
- **UI Library:** [Chakra UI](https://chakra-ui.com/) and [React Icons](https://react-icons.github.io/react-icons/)
- **State Management:** Context API + Hooks

---

## 📂 Project Structure

```
├── assets/
│   └── todo.jpg
├── components/
│   ├── ui/
│   │   ├── ErrorAlert.jsx
│   │   ├── alert.jsx
│   │   └── toaster.jsx
│   ├── AddTodo.jsx
│   ├── ClearTodoList.jsx
│   ├── DeleteTodo.jsx
│   ├── EditTodo.jsx
│   └── TodoList.jsx
├── contexts/
│   └── TodoContext.jsx
├── services/
│   └── todoService.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── supabase-client.js
```

- **components/** → UI components (todos, forms, buttons)
- **context/** → Context Provider for global todo state
- **services/** → Database logic (CRUD methods)
- **supabaseClient.js** → Supabase client configuration

---
