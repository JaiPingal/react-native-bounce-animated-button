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
        centralIcon={require('../assets/add-icon.png')} // Required circleWidth icon
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
