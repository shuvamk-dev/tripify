import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const AddButton = props => {
  const {buttonText, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.btnText}>{buttonText ? buttonText : 'ADD'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: COLORS.ORANGE_SECOND,
    paddingVertical: 12,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
});
