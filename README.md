# Todo App

A simple **full-stack Todo application** built with **React**, **Supabase**, **Chakra UI**, and **React Context API**.  
This project demonstrates clean state management, database integration, and a modular architecture.

---

## Features

- CRUD functions on todos + marking them as completed
- Clear all todos in one click
- Persistent storage with [Supabase](https://supabase.com)
- Global state management using React Context
- Cool UI with [Chakra UI](https://chakra-ui.com)
- Loading indicators for a smooth UX
- Organized project structure with services and contexts

---

## Tech Stack

- **Frontend:** React + Vite
- **Database:** [Supabase](https://supabase.com/) (Postgres)
- **UI Library:** [Chakra UI](https://chakra-ui.com/) and [React Icons](https://react-icons.github.io/react-icons/)
- **State Management:** Context API + Hooks

---

## Project Structure

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
│   ├── ScrollToTopButton.jsx
│   ├── TodoItem.jsx
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

## Installation & Setup

1. **Clone the repository**

```bash
https://github.com/baraa-elhajj/Todo-App.git
cd todo-app
```

2. **Install dependencies**

```bash
npm install
```

3. **configure Supabase**

   - Create a Supabase project.
   - Add the table `todo` with: `id`(bigint), `text`(varchar), `created_at`(timestamp)
   - Copy your API URL and anon/public key into `.env` file.

4. **Run the app**

```bash
npm run dev
```

**Note**: Make sure you have [Node.js](https://nodejs.org/) and [Vite](https://vitejs.dev/) installed.

---

## Contribution

Feel free to fork this project or suggest improvements if you find something cool!
