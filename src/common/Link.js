import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from './Text';

const Link = ({
  children,
  center,
  buttonStyle,
  to,
  onPress,
  textStyle,
  underline,
}) => {
  const navigation = useNavigation();
  const _textStyle = {
    textDecorationLine: underline ? 'underline' : 'none',
  };

  const _handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    } else if (to) {
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity
      onPress={_handlePress}
      style={[styles.button, buttonStyle]}>
      <Text
        md
        lightBlack
        center={center}
        style={[styles.text, _textStyle, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

/* Export
============================================================================= */
export default Link;