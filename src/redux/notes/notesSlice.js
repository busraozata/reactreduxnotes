import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    filtered: "",
    edit: [],
  },
  reducers: {
    addNotes: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeNote: (state, action) => {
      const id = action.payload;
      const filterNote = state.items.filter((item) => item.id !== id);
      state.items = filterNote;
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    filterNote: (state, action) => {
      state.filtered = action.payload.toLowerCase();
    },
    editNote: (state, action) => {
      const { id, note, color } = action.payload;
      const editedNote = state.items.find((item) => item.id === id);

      editedNote.id = id;
      editedNote.note = note;
      editedNote.color = color;
      state.edit = [];
    },
    update: (state, action) => {
      const id = action.payload;
      state.edit = [...state.items];
      state.edit = state.edit.find((item) => item.id === id);
    },
  },
});

export const { addNotes, removeNote, filterNote, editNote, update } =
  notesSlice.actions;
export default notesSlice.reducer;
