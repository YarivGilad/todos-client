import { configureStore} from "@reduxjs/toolkit";
import todosReducer from "./todos.slice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>