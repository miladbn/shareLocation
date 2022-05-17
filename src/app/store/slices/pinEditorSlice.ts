import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pin } from "../../types";

const pinEditorSlice = createSlice({
  name: "pins",
  initialState: <{ show: boolean; pin: Pin }>{
    show: false,
    pin: {
      id: 0,
      imageUrl: "",
      name: "",
      type: "",
      lat: 0,
      lng: 0,
    },
  },
  reducers: {
    showPinEditor(state, action: PayloadAction<Pin>) {
      state.pin = action.payload;
      state.show = true;
    },
    updatePinEditor(state, action: PayloadAction<Pin>) {
      state.pin = action.payload;
      state.show = true;
    },
    hidePinEditor(state) {
      state.show = false;
    },
  },
});

export const { showPinEditor, hidePinEditor, updatePinEditor } =
  pinEditorSlice.actions;

export default pinEditorSlice.reducer;
