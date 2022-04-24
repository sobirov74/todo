import { ActionTypes } from "./actions";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_NEW_TODO,
  UPDATE_TODO,
} from "./../Store/types";

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });
export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});

export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEW_TODO,
  payload: text,
});
export const updateTodo = (id: number, text: string): ActionTypes => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
