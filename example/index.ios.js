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

var Example = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
