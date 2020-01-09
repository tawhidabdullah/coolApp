import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CoolText } from '../components';

export default function CartScreen() {
  return (
    <ScrollView style={styles.container}>
      <CoolText type="primary">CartScreen </CoolText>
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
