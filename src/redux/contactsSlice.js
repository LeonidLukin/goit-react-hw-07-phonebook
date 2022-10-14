import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const setPending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
const setError = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
      // IMMER под капотом не мутирует state
      [fetchContacts.pending]: setPending,
      [addContact.pending]: setPending,
      [deleteContact.pending]: setPending,
  
      [fetchContacts.fulfilled]: (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      },
      [addContact.fulfilled]: (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
        state.contacts.isLoading = false;
      },
      [deleteContact.fulfilled]: (state, action) => {
        const index = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
        state.contacts.isLoading = false;
      },
  
      [fetchContacts.rejected]: setError,
      [addContact.rejected]: setError,
      [deleteContact.rejected]: setError,
  },
});

export const { changeFilter } = contactsSlice.actions;