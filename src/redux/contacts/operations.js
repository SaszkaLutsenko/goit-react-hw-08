import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


// const setHeader = (token) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// const clearHeader = () => {
//   axios.defaults.headers.common["Authorization"] = "";
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    if (response.status !== 200) {
      throw new Error('Failed to fetch contacts');
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactInfo, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contactInfo);
    if (response.status !== 201) {
      throw new Error('Failed to add contact');
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      if (response.status !== 200) {
        throw new Error('Failed to delete contact');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ contactId, contactInfo }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, contactInfo);
      if (response.status !== 200) {
        throw new Error('Failed to edit contact');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);