import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data } from 'src/flightsData';

export interface Flight {
  id: number;
  country: string;
  airport: string;
  image: string;
  directConnections: string[];
  rating: number;
}

interface Store {
  flights: Flight[];
  flightFrom?: Flight;
  flightTo?: Flight;
}

const initialState: Store = {
  flights: data,
  flightFrom: undefined,
  flightTo: undefined,
};
export const flightsSlice = createSlice({
  name: 'Flights',
  initialState,
  reducers: {
    setFlightFrom(state, action: PayloadAction<Flight | undefined>) {
      state.flightFrom = action.payload;
    },
    setFlightTo(state, action: PayloadAction<Flight | undefined>) {
      state.flightTo = action.payload;
    },
  },
});

export default flightsSlice.reducer;
export const { setFlightFrom, setFlightTo } = flightsSlice.actions;
