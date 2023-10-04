import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isAuthenticated: false,
  currentUser: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const userExists = state.users.some((user) => user.username === username && user.password === password);

      if (userExists) {
        state.isAuthenticated = true;
        state.currentUser = { username };
        state.errorMessage = null; 
      } else {
        
        state.errorMessage = 'Invalid username or password. Please try again.';
        alert(state.errorMessage); 
      }
    },
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { login, addUser, logout } = authSlice.actions;

export default authSlice.reducer;