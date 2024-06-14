# React Native Bounce Animated Button 🔥

This is a React Native component that provides an animated, interactive button with a bounce effect. The component supports customizable styles, colors, and icons, making it versatile for various use cases. Perfect for adding an engaging and dynamic touch to your app's user interface.

## Features
- Customizable container style
- Customizable icon style
- Customizable icon colors
- Adjustable circle height and width
- Bouncing animation on press
- Configurable animation duration
- Easy integration and usage

## Installation

```sh
npm install react-native-bounce-animated-button
```

## Usage

```js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedBounceButton from 'react-native-bounce-animated-button';

const App: React.FC = () => {
  // Function to handle button press
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // Add your custom functionality here...
  };

  return (
    <View style={styles.container}>
      {/* Animated Floating Button Component */}
      <AnimatedBounceButton
        containerStyle={{}} // Optional container style
        iconStyle={styles.iconStyle} // Custom style for the button icon
        circleHeight={60} // Optional height of the floating button circle
        circleWidth={60} // Optional width of the floating button circle
        iconColors="#0000ff" // Optional color for the button icon
        circleWidth={require('../assets/MicrosoftTeams-image.png')} // Required menu icon
        onPress={handleButtonPress} // Callback function for button press
        animationDuration={500} // Customize animation duration
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});

export default App;
```
## Props
- containerStyle: Optional style for the container of the button.
- iconStyle: Custom style for the button icon.
- iconColors: Optional color for the button icon.
- circleHeight: Optional height of the button circle.
- circleWidth: Optional width of the button circle.
- circleWidth: Required circleWidth icon.
- onPress: Callback function for button press.
- initialScale: Initial scale of the button (default: 1).
- finalScale: Final scale of the button during animation (default: 1.5).
- animationDuration: Duration of the animation in milliseconds (default: 500).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
