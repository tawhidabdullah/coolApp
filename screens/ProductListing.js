import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CoolText } from '../components';

export default function ProductListing() {
  return (
    <ScrollView style={styles.container}>
      <CoolText type="primary">Product Listing </CoolText>
    </ScrollView>
  );
}

ProductListing.navigationOptions = {
  title: 'Product Listing'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
