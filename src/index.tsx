import React, { useState } from 'react';
import {
  Animated,
  TouchableOpacity,
  StyleSheet,
  type ViewStyle,
  type ImageSourcePropType,
  type ImageStyle,
  Image,
} from 'react-native';

interface AnimatedBounceButtonProps {
  containerStyle?: ViewStyle; // Optional style for the container of the button
  iconStyle?: ImageStyle; // Custom style for the button icon
  iconColors?: string; // Optional color for the button icon
  circleHeight?: number; // Optional height of the floating button circle
  circleWidth?: number; // Optional width of the floating button circle
  centralIcon: ImageSourcePropType; // Required menu icon
  onPress?: () => void; // Callback function for button press
  initialScale?: number; // Initial scale of the button (default: 1)
  finalScale?: number; // Final scale of the button during animation (default: 1.5)
  animationDuration?: number; // Duration of the animation in milliseconds (default: 500)
}

const AnimatedBounceButton: React.FC<AnimatedBounceButtonProps> = ({
  containerStyle,
  iconColors = '#0000ff',
  circleHeight = 60,
  circleWidth = 60,
  centralIcon,
  iconStyle,
  onPress, // Extracting onPress from props
  initialScale = 1,
  finalScale = 1.5,
  animationDuration = 500,
}) => {
  const [animation] = useState(new Animated.Value(0));

  const handlePress = () => {
    onPress && onPress();
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      speed: 8 / animationDuration, // Adjust speed based on animation duration
    }).start(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        speed: 8 / animationDuration, // Adjust speed based on animation duration
      }).start();
    });
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [initialScale, finalScale], // Use initialScale and finalScale
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, containerStyle]}
    >
      <Animated.View
        style={[
          styles.circle,
          animatedStyle,
          {
            backgroundColor: iconColors,
            height: circleHeight,
            width: circleWidth,
          },
        ]}
      >
        {/* Apply icon style if provided */}
        <Image source={centralIcon} style={[styles.icon, iconStyle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  circle: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default AnimatedBounceButton;
