import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import AddButton from '../components/common/add-button';

const AddExpenseScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View>
        <Text>AddExpenseScreen</Text>
      </View>
      <AddButton onPress={() => navigation.navigate('Trip Expenses')} />
    </ScreenWrapper>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({});
