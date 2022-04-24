import { ITodo } from "./Interfaces";
import { useSelector } from "react-redux";
import { Store } from "../Store/types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/actionCreators";

const TodoList = () => {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        // if (todo.complated) {
        //   classes.push("complated");
        // }

        if (todos.length === 0) {
          return <h2 className='center'>The table is empty</h2>;
        }

        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label>
              <input
                type='checkbox'
                onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
              />
              <input
                onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
                value={todo.text}
              />
              <button
                className='btn'
                onClick={() => dispatch(deleteTodo(todo.id))}>
                <i className='material-icons red-text'>delete</i>
              </button>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
