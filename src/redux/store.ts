import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = {};

const store = configureStore({
  reducer: combineReducers(reducer),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
