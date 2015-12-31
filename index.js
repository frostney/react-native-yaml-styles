var React = require('react-native');
var StyleSheet = React.StyleSheet;

var yaml = require('js-yaml');
var changeObjectCase = require('change-object-case');

var YAMLStyleSheet = {
  create: function(styles) {
    try {
      return StyleSheet.create(changeObjectCase(yaml.safeLoad(styles)));
      } catch (e) {
        console.log('Error while loading stylesheet: ' + e);
      }
  }
};

module.exports = YAMLStyleSheet;
