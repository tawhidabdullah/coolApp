import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CoolText = ({ children, style, type = 'secondary' }) => {
  return <Text style={[styles[type], styles.common, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    lineHeight: 23
  },
  secondary: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444',
    lineHeight: 27
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28
  },
  common: {
    fontFamily: 'raleRegular'
  }
});

export default CoolText;
