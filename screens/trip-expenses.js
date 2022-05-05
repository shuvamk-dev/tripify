import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import BackButton from '../components/common/back-button';
import {COLORS} from '../theme/theme';
import ExpenseCard from '../components/trip/expense-card';
import EmptyExpenses from '../components/trip/empty-expenses';
import {useSelector} from 'react-redux';

const EXPENSES = [
  {
    id: 1,
    title: 'BOught Chips i=on the way',
    category: 'Food',
    amount: 2345,
  },
  {
    id: 2,
    title: 'BOught Chips i=on the way',
    category: 'Shopping',
    amount: 2345,
  },
  {
    id: 3,
    title: 'BOught Chips i=on the way',
    category: 'Commute',
    amount: 2345,
  },
  {
    id: 4,
    title: 'BOught Chips i=on the way',
    category: 'Entertainment',
    amount: 2345,
  },
  {
    id: 5,
    title: 'BOught Chips i=on the way',
    category: 'Other',
    amount: 2345,
  },
  {
    id: 6,
    title: 'BOught Chips i=on the way',
    category: 'FOOD',
    amount: 2345,
  },
  {
    id: 7,
    title: 'BOught Chips i=on the way',
    category: 'FOOD',
    amount: 2345,
  },
  {
    id: 8,
    title: 'BOught Chips i=on the way',
    category: 'FOOD',
    amount: 2345,
  },
  {
    id: 9,
    title: 'BOught Chips i=on the way',
    category: 'FOOD',
    amount: 2345,
  },
];

const TripExpenses = ({navigation, route}) => {
  const selectedTrip = route.params;

  const expenses = useSelector(state => {
    const trips = state.trips.trips;
    const expensesToBeShown = trips.filter(trip => trip.id === selectedTrip.id);
    console.log(expensesToBeShown, 'herer');
    if (expensesToBeShown.length > 0) {
      return expensesToBeShown[0].expenses;
    }
    return [];
  });

  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.bannerContainer}>
          <Image source={selectedTrip.banner} style={styles.banner} />

          <View style={styles.placeConatiner}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View>
        </View>
        <View style={styles.txtBtn}>
          <Text style={styles.subHeading}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Expense', selectedTrip)}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={expenses}
            renderItem={({item}) => <ExpenseCard expense={item} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={<EmptyExpenses />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  banner: {
    width: '125%',
    height: 240,
    resizeMode: 'cover',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonText: {
    color: COLORS.DARK_ORANGE,
    fontWeight: '700',
  },
  flatlistContainer: {
    height: 420,
  },
  place: {
    textAlign: 'center',
    color: COLORS.DARK_ORANGE,
    fontSize: 20,
    fontWeight: '700',
  },
  placeConatiner: {
    backgroundColor: COLORS.WHITE,
    minWidth: '50%',
    paddingVertical: 12,
    borderRadius: 18,
    position: 'absolute',
    bottom: -20,
  },
  txtBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
});
