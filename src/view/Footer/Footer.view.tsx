import React, { FC } from "react";
import { Box, Button, LinkButton } from "./Footer.styles";
import { removeCompleted, filterTodos } from "../../state/todos.slice";
import { ITodo, VisabilityFilter } from "../../types/todos.types";
import { HBox } from "../../styles/containers.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/configure.store";

export const Footer: FC = () => {
  const dispatch = useDispatch();
  const { currentFilter, items } = useSelector(
    (state: RootState) => state.todos
  );

  const activeCounter = items.reduce(
    (total: number, todo: ITodo) => (todo.completed ? total : total + 1),
    0
  );

  const hasCompleted = items.some((todo: ITodo) => todo.completed === true);

  return (
    <Box title="footer">
      {activeCounter} items left
      {hasCompleted && (
        <HBox title="controls">
          {Object.keys(VisabilityFilter).map((visFilter) => (
            <Button
              key={visFilter}
              onClick={() => dispatch(filterTodos(visFilter as VisabilityFilter))}
              selected={currentFilter === visFilter}
            >
              {visFilter}
            </Button>
          ))}
          <LinkButton onClick={()=> dispatch(removeCompleted())}>Clear Completed</LinkButton>
        </HBox>
      )}
    </Box>
  );
};

export default Footer;
