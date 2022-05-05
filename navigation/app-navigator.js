import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import AddTripScreen from '../screens/add-trip';
import AddExpenseScreen from '../screens/add-expense';
import TripExpenses from '../screens/trip-expenses';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Trip"
        component={AddTripScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Expense"
        component={AddExpenseScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Trip Expenses"
        component={TripExpenses}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
