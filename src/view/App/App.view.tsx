import React, { FC, useEffect } from "react";

import { Container, ListBox } from "./App.styles";
import Footer from "../Footer/Footer.view";
import EntryForm from "../EntryForm/EntryForm.view";
import TodoItem from "../TodoItem/TodoItem.view";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/configure.store";
import { getAllTasks } from "../../network/todos.api";
import { initTodos } from "../../state/todos.slice";
import { ITodo } from "../../types/todos.types";

const App: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  useEffect(()=> {
     async function getInitialData(){
       const initialTasks = await getAllTasks();
       dispatch( initTodos(initialTasks));
     }
     getInitialData()
  },[])

  return (
    <Container>
      <h1>Todo App</h1>
      <ListBox>
        <EntryForm />
        {todos.length > 0 && (
          <>
            <ul>
              {todos.map((todo) => {
                return todo.show && <TodoItem key={todo.id} {...todo} />;
              })}
            </ul>
            <Footer />
          </>
        )}
      </ListBox>
    </Container>
  );
};
export default App;
// export default () => {
//   return <Container><h1>hello</h1></Container>;
// };
