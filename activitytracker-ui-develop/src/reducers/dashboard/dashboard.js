import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'
// import { DEFAULT_DASHBOARD_STATE } from '../../shared/shapes';


const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    resetUser(state, action) {
      state.users = []
    }
  }
});

export const { setUsers, resetUser } = dashboardSlice.actions;

export default dashboardSlice.reducer;

// Dashboard API
export const getUsers = () => async (dispatch) => {
  // Call API.
  const response = await axios.get('http://localhost:3001/users');
  dispatch(setUsers(response.data));
}; 
