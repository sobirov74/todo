import {
  ADD_TODO,
  DELETE_TODO,
  SET_NEW_TODO,
  SET_TODO,
  UPDATE_TODO,
} from "../Store/types";
// import Todo from "../Todos/Todo";
import { Todo } from "./../Store/types";
export type ActionTypes =
  | {
      type: typeof SET_TODO;
      payload: Todo[];
    }
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        text: string;
      };
    }
  | {
      type: typeof SET_NEW_TODO;
      payload: string;
    };
