import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboard';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  }
})