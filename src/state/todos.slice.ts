import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, VisabilityFilter } from "../types/todos.types";

interface SliceType {
  items: ITodo[];
  currentFilter: VisabilityFilter;
}

const initialState: SliceType = {
  items: [{ id: "abc", title: "aaaa", show: true, completed: false }],
  currentFilter: VisabilityFilter.All,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initTodos: (state, action: PayloadAction<ITodo[]>)=> {
      state.items = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Math.random().toString(36).slice(2, 7),
        title: action.payload,
        show: true,
        completed: false,
      });
    },
    toggle: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items.forEach((todo: ITodo) => {
        if (todo.id === id) todo.completed = !todo.completed;
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.items.findIndex((todo: ITodo) => todo.id === id);
      state.items.splice(index, 1);
    },
    removeCompleted: (state) => {
      state.items = state.items.filter(
        (todo: ITodo) => todo.completed === false
      );
    },
    filterTodos: (state, action: PayloadAction<VisabilityFilter>) => {
      const visFilter = action.payload;
      state.currentFilter = visFilter;
      state.items.forEach((todo: ITodo) => {
        switch (visFilter) {
          case VisabilityFilter.All:
            todo.show = true;
            break;
          case VisabilityFilter.Active:
            todo.show = todo.completed === false;
            break;
          case VisabilityFilter.Completed:
            todo.show = todo.completed === true;
            break;
        }
      });
    },
  },
});

export default todosSlice.reducer;

export const {
  initTodos, 
  addTodo, 
  toggle, 
  remove, 
  removeCompleted, 
  filterTodos 
} = todosSlice.actions;

// export const fetchRandomPerson = () => async (dispatch) => {
//   try {
//     dispatch(fetch_person_started());
//     const data = await person_api.getRandomUser();
//     if (!data.results) throw new Error("Data came back with no results");
//     dispatch(person_data_ready(data.results[0]));
//   } catch (err) {
//     dispatch(
//       fetch_person_failed("The People's data is unavailable at the moment")
//     );
//   }
// };
