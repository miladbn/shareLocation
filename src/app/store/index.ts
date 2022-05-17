import { configureStore } from "@reduxjs/toolkit";
import pinReducers from "./slices/pinsSlice";
import pinEditorReducers from "./slices/pinEditorSlice";

export const store = configureStore({
  reducer: {
    pins: pinReducers,
    pinEditor: pinEditorReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
