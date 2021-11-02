import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsAction = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      return await axios.get('/contacts');
    } catch (err) {
      console.log(err.massege);
    }
  },
);

export const addContactsAction = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      return await axios.post('/contacts', contact);
    } catch (err) {
      console.log(err.massege);
    }
  },
);

export const deleteContactsAction = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (err) {
      console.log(err.massege);
    }
  },
);
