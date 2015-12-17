var React = require('react-native');
var StyleSheet = React.StyleSheet;

var yaml = require('js-yaml');
var changeObjectCase = require('change-object-case');

var YAMLStyleSheet = {
  create: function(styles) {
    // TODO: Let's do some exception handling here
    return StyleSheet.create(changeObjectCase(yaml.safeLoad(styles)));
  }
};

module.exports = YAMLStyleSheet;
