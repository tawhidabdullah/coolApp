import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { setFontType } from '../utils/textManipulator';

export function NormalText(props) {
  const font = setFontType(props.type ? props.type : 'normal');
  const style = [{ fontFamily: font }, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}

export function PrimaryHeading(props) {
  const font = setFontType('raleMedium');
  const style = [
    { fontFamily: font },
    styles.primaryHeading,
    props.style || {}
  ];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  primaryHeading: {
    fontSize: 17,
    fontWeight: '700',
    color: '#444'
  },
  paragraphText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#444'
  }
});
