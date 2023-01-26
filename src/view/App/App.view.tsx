import React, { FC } from "react";

import { Container, ListBox } from "./App.styles";
import Footer from "../Footer/Footer.view";
import EntryForm from "../EntryForm/EntryForm.view";
import TodoItem from "../TodoItem/TodoItem.view";
import { useSelector } from "react-redux";
import { RootState } from "../../state/configure.store";



const App: FC = () => {

  const todos = useSelector((state: RootState)=> state.todos.items)

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
            {/* <Footer /> */}
          </>
        )}
      </ListBox>
    </Container>
  );
};
export default App;
