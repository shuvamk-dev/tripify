import {createSlice} from '@reduxjs/toolkit';

const initialTripsState = {
  trips: [],
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (state, action) => {
      const tripId = action.payload.tripId;
      state.trips = state.trips.map(trip => {
        if (trip.id === tripId) {
          trip.expenses = [...trip.expenses, action.payload.expense];
        }
        return trip;
      });
    },
  },
});

export const {addExpense, addTrip} = tripsSlice.actions;

export default tripsSlice.reducer;
