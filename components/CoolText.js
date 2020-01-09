import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { setFontType } from '../utils/textManipulator';

export default CoolText = props => {
  const { type } = props;

  switch (type) {
    case 'primary':
      return <PrimaryHeading {...props} />;
    case 'paragraph':
      return <ParagraphText {...props} />;
    default:
      return <NormalText />;
  }
};

function PrimaryHeading(props) {
  const font = setFontType('raleMedium');
  const style = [
    { fontFamily: font },
    styles.primaryHeading,
    props.style || {}
  ];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}

function NormalText(props) {
  const font = setFontType(props.type ? props.type : 'normal');
  const style = [{ fontFamily: font }, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}

function ParagraphText(props) {
  const font = setFontType('raleRegular');
  const style = [{ fontFamily: font }, styles.paragraphText, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  primaryHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444'
  },
  paragraphText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#666'
  }
});
