/**
 * Quickly Gabbing React Native Home Page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

type Props = {};
export default class QuicklyGabbingReactNativeHomePage extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Please enter text</Text>
        <TextInput
          multiline={true}
          placeholder="Type text to display in toast"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});