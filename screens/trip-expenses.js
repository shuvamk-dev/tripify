import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import AddButton from '../components/common/add-button';
import BackButton from '../components/common/back-button';

const TripExpenses = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <Text>TripExpenses</Text>
        <AddButton
          buttonText={'Add Expense'}
          onPress={() => navigation.navigate('Add Expense')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({});
