import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Platform,
  Pressable,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';

import {BlurView} from '@react-native-community/blur';

import * as Colors from '../config/colors';

/* =============================================================================
<TextInput />
============================================================================= */
const TextInput = ({
  left,
  right,
  type,
  label,
  value,
  editable,
  inputStyle,
  labelStyle,
  keyboardType,
  placeholder,
  onRightPress,
  onLeftPress,
  containerStyle,
  secureTextEntry,
  contentContainerStyle,
  rightContainerStyle,
  onChange,
  ...props
}) => {
  const textInput = useRef();
  const [focused, setFocused] = useState(false);

  const _handleChange = inputValue => {
    if (onChange) {
      onChange(inputValue);
    }
  };

  const _handlePress = () => {
    if (textInput.current) {
      textInput.current.focus();
    }
  };
  const _handleRightPress = () => {
    if (typeof onRightPress === 'function') {
      onRightPress();
    }
  };
  const _renderRight = () => {
    if (right) {
      return right;
    }
    return null;
  };
  const _renderLeft = () => {
    if (left) {
      return left;
    }
    return null;
  };
  const _handleLeftPress = () => {
    if (typeof onLeftPress === 'function') {
      onLeftPress();
    }
  };

  const _style = {
    // borderColor: focused ? Colors.entery : 'rgba(255, 255, 255, 0.12)',
  };

  return (
    <Pressable
      style={[styles.container, containerStyle]}
      disabled={!editable}
      onPress={_handlePress}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View
        style={[
          type === 'primary' ? styles.primaryContentContainerStyle : undefined,
          type === 'secondary'
            ? styles.secondaryContentContainerStyle
            : undefined,
          _style,
          contentContainerStyle,
        ]}>
        {left && (
          <Pressable onPress={_handleLeftPress} style={styles.leftContainer}>
            {_renderLeft()}
          </Pressable>
        )}
        <RNTextInput
          ref={textInput}
          value={value}
          style={[styles.input, inputStyle]}
          editable={editable}
          selectionColor={Colors.primary}
          placeholderTextColor={Colors.white}
          placeholder={placeholder}
          keyboardType={
            keyboardType ||
            (keyboardType &&
              Platform.OS === 'android' &&
              value &&
              value?.length > 0)
          }
          secureTextEntry={
            secureTextEntry ||
            (secureTextEntry &&
              Platform.OS === 'android' &&
              value &&
              value?.length > 0)
          }
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChangeText={_handleChange}
          {...props}
        />
        {right && (
          <Pressable
            onPress={_handleRightPress}
            style={[styles.rightContainer, rightContainerStyle]}>
            {_renderRight()}
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

TextInput.defaultProps = {
  icon: null,
  type: 'primary',
  editable: true,
  left: undefined,
  right: undefined,
  label: undefined,
  inputStyle: {},
  labelStyle: {},
  placeholder: undefined,
  containerStyle: {},
  secureTextEntry: false,
  contentContainerStyle: {},
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: Colors.label,
    fontFamily: 'Inter-SemiBold',
  },
  leftContainer: {
    paddingLeft: 15,
    height: 50,
    justifyContent: 'center',
  },
  rightContainer: {
    paddingHorizontal: 15,
    padding: 20,
  },
  primaryContentContainerStyle: {
    height: 50,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
  },
  secondaryContentContainerStyle: {
    height: 50,
    width: '100%',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.border,
    borderWidth: 2,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 15,
    color: Colors.white,
    fontFamily: 'Inter-Regular',
  },
});

export default TextInput;
