import { createSlice } from '@reduxjs/toolkit';
import { data } from 'src/flightsData';

interface Flight {
  country: string;
  airport: string;
  image: string;
  directConnections: string[];
}

const initialState: { flights: Flight[] } = {
  flights: data,
};
export const flightsSlice = createSlice({
  name: 'Flights',
  initialState,
  reducers: {},
});

export default flightsSlice.reducer;
