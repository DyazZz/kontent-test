import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  userData: {
    img: string;
    name: string;
  };
  notifications: number;
}

const initialState: AuthState = {
  userData: {
    img: "https://preview.redd.it/who-made-this-image-please-the-wolf-in-this-pic-has-horns-v0-nvbulpj75pza1.png?width=640&crop=smart&auto=webp&s=7ce5ebb4f5c9e3c5a0f455b9c743391d8236ae5a",
    name: "Оксана",
  },
  notifications: 76,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
