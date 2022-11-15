import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "Theme",
  initialState: {
    isLight: true,
    msg: "",
  },
  reducers: {
    setIsLight: (stateObj, action) => {
      stateObj.isLight = !stateObj.isLight;
      stateObj.msg = action.payload;
    },
  },
});

export const { setIsLight } = themeSlice.actions;
export default themeSlice.reducer;
