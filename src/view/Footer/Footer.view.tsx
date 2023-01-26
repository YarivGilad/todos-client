import React, { FC } from "react";
import { Box, Button, LinkButton } from "./Footer.styles";
import { useStore } from "../../state/todos.slice";
import { VisabilityFilter } from "../../types/todos.types";
import { HBox } from "../../styles/containers.styled";

export const Footer: FC = () => {
  const {
    activeCounter,
    currentFilter,
    filterTodos,
    hasCompleted,
    removeCompleted
  } = useStore();

  return (
    <Box title="footer">
      { activeCounter() } items left
      { hasCompleted() &&
        <HBox title="controls">
          {Object.keys(VisabilityFilter).map((visFilter) => (
            <Button key={visFilter}
                    onClick={()=> filterTodos(visFilter as VisabilityFilter)}
                    selected={currentFilter === visFilter}>
              {visFilter}
            </Button>
          ))}
          <LinkButton onClick={removeCompleted}>Clear Completed</LinkButton>
        </HBox> }
    </Box>
  );
};

export default Footer;
