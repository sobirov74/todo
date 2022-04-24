import { DELETE_TODO, SET_TODO, Store } from "../Store/types";
import { ActionTypes } from "./actions";
import { ADD_TODO } from "./../Store/types";
import { addTodo, deleteTodo } from "./../Store/store";

export const todoReducer = (
  state: Store = {
    todos: [],
    newTodo: "",
  },
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, action.payload),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, state.newTodo),
      };

    default: {
      return state;
    }
  }
};
