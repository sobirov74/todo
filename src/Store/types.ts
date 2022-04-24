export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODO = "SET_TODO";
export const SET_NEW_TODO = "SET_NEW_TODO";
