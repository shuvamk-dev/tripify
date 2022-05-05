import {configureStore} from '@reduxjs/toolkit';
import tripsReducer from '../slice/trips';

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});
