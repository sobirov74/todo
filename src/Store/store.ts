import { Todo } from "./types";

export const updateTodo = (todos: Todo[], id: number, text: string) =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const setNewTodo = (todos: Todo[], text: string) =>
  todos.map((todo) => ({
    ...todo,
    text,
  }));

export const deleteTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((m) => m.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    text,
    id: Date.now(),
    done: false,
  },

  // setTodos((prev) => [newTodo, ...prev]);
];
