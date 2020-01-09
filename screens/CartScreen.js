import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PrimaryHeading } from '../components/StyledText';

export default function CartScreen() {
  return (
    <ScrollView style={styles.container}>
      <PrimaryHeading>CartScreen </PrimaryHeading>
    </ScrollView>
  );
}

CartScreen.navigationOptions = {
  title: 'Cart Screen'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
