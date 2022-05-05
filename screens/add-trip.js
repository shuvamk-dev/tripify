import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import BackButton from '../components/common/back-button';

const AddTripScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <BackButton onPress={() => navigation.goBack()} />
      <View>
        <Text>AddTripScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;

const styles = StyleSheet.create({});
