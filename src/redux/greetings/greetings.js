import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/greetings';

const FETCH = 'hello-rails-react/greetings/FETCH';

const initialState = {
  greeting: '',
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await axios.get(API_URL);
  const { data } = response;
  return data.message;
});

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};