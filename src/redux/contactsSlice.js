import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      const contactExists = state.items.some(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
          contact.number === action.payload.number
      );
      if (!contactExists) {
        state.items.push(action.payload);
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
