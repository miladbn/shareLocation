import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../types";

const initialState: store = {
  activePin: {
    lat: 0,
    lng: 0,
    name: "",
    type: "",
    imgSrc: "",
    id: 0,
  },
  pins: [],
  showPinEditor: false,
  id: 0,
};

const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setShowPinEditor: (state) => {
      state.showPinEditor = true;
    },
    setActivePin: (state, action: PayloadAction<store>) => {
      state.activePin = action.payload.activePin;
    },
    setPins: (state, action: PayloadAction<store>) => {
      state.pins = action.payload.pins;
    },
    setId: (state, action: PayloadAction<store>) => {
      state.id = action.payload.id;
    },
  },
});
