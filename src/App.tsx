import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Todo from "./Todos/Todo";
import { todoReducer } from "./Redux/reducer";

const store = createStore(todoReducer);

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
