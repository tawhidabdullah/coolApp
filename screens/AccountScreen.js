import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CoolText } from '../components';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <CoolText type="primary">Account Screen </CoolText>
    </ScrollView>
  );
}

AccountScreen.navigationOptions = {
  title: 'Account Screen'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
