import TodoList from "./../Components/TodoList";
import Input from "./../Components/Input";

const Todo = () => {
  return (
    <div className='container'>
      <h1 className='title'>Todo app</h1>
      <Input />
      <TodoList />
    </div>
  );
};

export default Todo;
