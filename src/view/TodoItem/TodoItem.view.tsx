import React, { FC, useState } from "react";
import {
  TodoItemBox,
  Check,
  Uncheck,
  Remove,
  TodoTitle
} from "./TodoItem.styles";
import { ITodo } from "../../types/todos.types";


const TodoItem: FC<ITodo> = ({ id, completed, title }) => {
  // const { toggle, remove } = useStore();
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <TodoItemBox title="todo item"
                 onMouseEnter={() => setHovered(true)} 
                 onMouseLeave={() => setHovered(false)}>
      {/* <div onClick={() => toggle(id)}>
        {completed ? <Check /> : <Uncheck />}
      </div> */}
      <TodoTitle completed={completed}>{title}</TodoTitle>
      {/* { hovered && <Remove onClick={() => remove(id)} title="remove icon" /> } */}
    </TodoItemBox>
  );
};

export default TodoItem;
