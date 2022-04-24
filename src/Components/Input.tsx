import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../Store/types";
import { updateTodo, setNewTodo, addTodo } from "./../Redux/actionCreators";

// interface ActionHendler {
//   onAdd(title: string): void;
// }

const Input = () => {
  const dispatch = useDispatch();
  const newTodo = useSelector((state: Store) => state.newTodo);

  return (
    <div className='container'>
      <div className='input-field col s6'>
        <input
          onChange={(e) => dispatch(setNewTodo(e.target.value))}
          type='text'
          placeholder='Type something'
          value={"asjakahskjah"}
          className='validate'
        />
        <button onClick={() => dispatch(addTodo())} className='btn'>
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
