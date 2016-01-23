/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var YAMLStyleSheet = require('react-native-yaml-styles');

var Example = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});

var styles = YAMLStyleSheet.create(`
  container:
    flex: 1
    justify-content: center
    align-items: center
    background-color: '#f5fcff'
  welcome:
    font-size: 20
    text-align: center
    margin: 10
  instructions:
    text-align: center
    color: '#333333'
    margin-bottom: 5
`);

AppRegistry.registerComponent('Example', () => Example);
