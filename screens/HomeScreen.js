import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { CoolText, Carousel } from '../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tabBarInfoContainer}>
        <CoolText type="header" color="red">
          {' '}
          The Great Tawhid Abdullah{' '}
        </CoolText>
        <CoolText type="secondary"> Computer Number One </CoolText>
        <CoolText type="primary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At suscipit,
          tempore rerum mollitia doloremque aperiam, sed id et consequuntur
          totam nulla cum. Natus modi aperiam accusamus nesciunt omnis libero
          asperiores!
        </CoolText>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
