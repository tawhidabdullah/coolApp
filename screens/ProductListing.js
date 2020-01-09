import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PrimaryHeading } from '../components/StyledText';

export default function ProductListing() {
  return (
    <ScrollView style={styles.container}>
      <PrimaryHeading>Product Listing </PrimaryHeading>
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
