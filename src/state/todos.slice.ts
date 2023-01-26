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
    addTodo: (state,action:PayloadAction<string>)=> {
        state.items.push({
            id: Math.random().toString(36).slice(2,7), 
            title: action.payload,
            show: true,
            completed: false
        })   
    }
  },
});

export default todosSlice.reducer;

export const {addTodo} = todosSlice.actions;

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
