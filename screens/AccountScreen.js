import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PrimaryHeading } from '../components/StyledText';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <PrimaryHeading>Account Screen </PrimaryHeading>
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
