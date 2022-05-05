import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/assets';

const EmptyExpenses = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_EXPENSES} style={styles.banner} />
      <Text style={styles.message}>
        You haven't recorded any expenses yet :(
      </Text>
    </View>
  );
};

export default EmptyExpenses;

const styles = StyleSheet.create({
  banner: {
    height: 240,
    width: 240,
  },
  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  message: {
    fontSize: 14,
    fontWeight: '600',
  },
});
