import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
    loadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFailure: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
    // Signup Actions
    signupRequest: (state) => {
      state.loading = true;
      state.error = null; // Reset error on new request
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = !action.payload;
    }
  }
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  loadUserSuccess,
  loadUserFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  setAuth,
} = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'An error occurred'));
  }
};

export const loadUser = createAsyncThunk('auth/loadUser', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to load user');
    }
  } else {
    return thunkAPI.rejectWithValue('No token found');
  }
});

// Signup action
export const signup = (formData) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const response = await axios.post('https:localhost:9000/auth/signup', formData);
    dispatch(signupSuccess(response.data));
    
    // Automatically log in the user after successful signup
    dispatch(login(formData.email, formData.password)); // Assume formData has email and password
  } catch (error) {
    dispatch(signupFailure(error.response?.data?.message || 'An error occurred'));
  }
};



export default authSlice.reducer;
