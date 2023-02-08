// import { configureStore} from "@reduxjs/toolkit";
// import { syncServer } from "../middleware/syncServer.middelware";
// import todosReducer from "./todos.slice";

// const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//   },
//   middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(),syncServer]
// });
// export default store;
// export type RootState = ReturnType<typeof store.getState>


//------
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import { syncServer } from "../middleware/syncServer.middelware";
import todosReducer from "./todos.slice";

// import todosSlice from './todos.slice';

const reducer = {
  todos: todosReducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const initStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(),syncServer]
  });
};
const store = initStore();

export default store;

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;