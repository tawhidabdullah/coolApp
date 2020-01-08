import React from 'react';
import { Text } from 'react-native';

export function NormalText(props) {
  const setFontType = type => {
    switch (type) {
      case 'black':
        return 'raleBlack';
      case 'bold':
        return 'raleBold';
      case 'semi-bold':
        return 'raleSemiBold';
      case 'medium':
        return 'raleMedium';
      default:
        return 'raleRegular';
    }
  };

  const font = setFontType(props.type ? props.type : 'normal');
  const style = [{ fontFamily: font }, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
}
