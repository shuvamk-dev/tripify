import {createSlice} from '@reduxjs/toolkit';

const initialTripsState = {
  trips: [],
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      const updatedTripsList = [...state.trips, action.payload];
      return {
        ...state,
        trips: updatedTripsList,
      };
    },
    addExpense: (state, action) => {
      const tripId = action.payload.tripId;
      const updatedTripsList = state.trips.map(trip => {
        if (trip.id === tripId) {
          trip.expenses = [...trip.expenses, action.payload.expense];
        }
        return trip;
      });
      return {
        ...state,
        trips: updatedTripsList,
      };
    },
  },
});

export const {addExpense, addTrip} = tripsSlice.actions;

export default tripsSlice.reducer;
