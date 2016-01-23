# react-native-yaml-styles
If you prefer YAML over JSON/JavaScript styles in your React Native projects

## Installation
```
$ npm install react-native-yaml-styles --save
```

## Usage
```javascript
var styles = YAMLStyleSheet.create(`
  welcome:
    font-size: 20
`);
```

## But... why?
I was talking with @pichfl about how much better YAML is than JSON over an `.eslintrc` file at a [Web & Wine meetup](http://www.meetup.com/web-and-wine/). I made a snarky remark about maybe using YAML for styles instead of CSS or other options and well... here we are.

## But... seriously... why?
- React components are getting bigger and bigger, we want everything to be concise but only split it up if necessarily needed. So with a YAML-based stylesheet, we're getting rid of all the pesky braces we're saving about 30% of lines in total
- Every JSON can be described as YAML
- It's super-similar to [SASS](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html) actually
- It's a bit of a middle ground between completely using a CSS preprocessor and having JSON-flavored styles right beside your component

## Code style
AirBnB ES5

## License
MIT
