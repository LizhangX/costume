/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const onPressLearnMore = () => {
    console.log('pressed');
};

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Better Off Costumes!
        </Text>
        {/* <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
        <Button 
            onPress={onPressLearnMore}
            title="Settings"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button 
            onPress={onPressLearnMore}
            title="New Costume"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button 
            onPress={onPressLearnMore}
            title="Search"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button 
            onPress={onPressLearnMore}
            title="Check In"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button 
            onPress={onPressLearnMore}
            title="Check Out"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
