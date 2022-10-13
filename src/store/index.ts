import { combineReducers, configureStore } from '@reduxjs/toolkit';
import flightsSlice from './slices/flightsSlice';

const rootReducer = combineReducers({
  flightsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
