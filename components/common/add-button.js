import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AddButton = props => {
  const {buttonText, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{buttonText ? buttonText : 'ADD'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
