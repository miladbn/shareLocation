import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pin } from "../../types";

let lastId = 0;

const pinsSlice = createSlice({
  name: "pins",
  initialState: [],
  reducers: {
    addPin: (pins: Pin[], action: PayloadAction<Pin>) => {
      pins.push({
        ...action.payload,
        id: ++lastId,
      });
    },
    updatePin(pins: Pin[], action: PayloadAction<Pin>) {
      const index = pins.findIndex((i) => i.id === action.payload.id);
      pins[index] = {
        ...action.payload,
      };
    },
  },
});

export const { addPin, updatePin } = pinsSlice.actions;

export default pinsSlice.reducer;
