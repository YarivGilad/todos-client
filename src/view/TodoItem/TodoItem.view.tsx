import React, { FC, useState } from "react";
import {
  TodoItemBox,
  Check,
  Uncheck,
  Remove,
  TodoTitle
} from "./TodoItem.styles";
import { ITodo } from "../../types/todos.types";
import { toggle, remove } from "../../state/todos.slice";
import { useDispatch } from "react-redux";


const TodoItem: FC<ITodo> = ({ id, completed, title }) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <TodoItemBox title="todo item"
                 onMouseEnter={() => setHovered(true)} 
                 onMouseLeave={() => setHovered(false)}>
      <div onClick={() => dispatch(toggle(id))}>
        {completed ? <Check /> : <Uncheck />}
      </div>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      { hovered && <Remove onClick={() => dispatch(remove(id))} title="remove icon" /> }
    </TodoItemBox>
  );
};

export default TodoItem;
