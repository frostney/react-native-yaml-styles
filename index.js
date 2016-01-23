var React = require('react-native');
var StyleSheet = React.StyleSheet;

var yaml = require('js-yaml');
var changeCaseObject = require('change-case-object');

var YAMLStyleSheet = {
  create: function(styles) {
    try {
      return StyleSheet.create(changeCaseObject.camelCase(yaml.safeLoad(styles)));
      } catch (e) {
        console.log('Error while loading stylesheet: ' + e);
      }
  }
};

module.exports = YAMLStyleSheet;
