import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORY_BG, COLORS} from '../../theme/theme';

const ExpenseCard = ({expense}) => {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        backgroundColor: CATEGORY_BG[expense.category],
      }}>
      <View>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>₹{expense.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 18,
    alignItems: 'center',
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  expenseCategory: {
    fontSize: 12,
    marginVertical: 4,
  },
});
