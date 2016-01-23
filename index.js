var React = require('react-native');
var StyleSheet = React.StyleSheet;

var yaml = require('js-yaml');
var changeCaseObject = require('change-case-object');

var YAMLStyleSheet = {
  create: function create(styles) {
    var convertedStyles = {};

    try {
      convertedStyles = yaml.safeLoad(styles, {
        json: true,
      });
    } catch (e) {
      console.log('Error while loading stylesheet: ' + e);
    }

    return StyleSheet.create(changeCaseObject.camelCase(convertedStyles));
  },
};

module.exports = YAMLStyleSheet;
