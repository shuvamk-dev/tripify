import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BackButton = props => {
  const {buttonText, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>BAck</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
