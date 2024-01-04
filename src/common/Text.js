import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

import * as Colors from '../config/colors';

/* =============================================================================
<Text />
============================================================================= */
const Text = ({
  h1,
  h2,
  h3,
  xl,
  lg,
  md,
  sm,
  fs16,
  fs10,
  xs,
  bold,
  grey,
  uppercase,
  light,
  danger,
  lightBlack,
  right,
  medium,
  white,
  semibold,
  regular,
  extraBold,
  extraLight,
  style,
  center,
  primary,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        xl && styles.xl,
        lg && styles.lg,
        md && styles.md,
        sm && styles.sm,
        xs && styles.xs,
        fs16 && styles.fs16,
        fs10 && styles.fs10,
        bold && styles.bold,
        light && styles.light,
        grey && styles.grey,
        lightBlack && styles.lightBlack,
        regular && styles.regular,
        right && styles.right,
        white && styles.white,
        danger && styles.danger,
        medium && styles.medium,
        semibold && styles.semibold,
        extraBold && styles.extraBold,
        extraLight && styles.extraLight,
        center && styles.center,
        primary && styles.primary,
        uppercase && styles.uppercase,
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontSize: 16,
  },
  h1: {
    fontSize: 38,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  xl: {
    fontSize: 20,
  },
  lg: {
    fontSize: 18,
  },
  md: {
    fontSize: 18,
  },
  fs16: {
    fontSize: 16,
  },
  sm: {
    fontSize: 14,
  },
  xs: {
    fontSize: 12,
  },
  fs10: {
    fontSize: 10,
  },
  thin: {
    fontFamily: 'Inter-Thin',
  },
  bold: {
    fontFamily: 'Inter-Bold',
  },
  extraBold: {
    fontFamily: 'Inter-ExtraBold',
  },
  extraLight: {
    fontFamily: 'Inter-ExtraLight',
  },
  lightBlack: {
    color: '#545454',
  },
  danger: {
    color: '#FE2047',
  },
  grey: {
    color: 'rgba(11, 42, 70, 0.7)',
  },
  light: {
    color: '#0061FF',
    // fontFamily: 'Inter',
  },
  white: {
    color: Colors.white,
  },
  medium: {
    fontFamily: 'Inter-Medium',
  },
  semibold: {
    fontFamily: 'Inter-SemiBold',
  },
  regular: {
    fontFamily: 'Inter-Regular',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  primary: {
    color: Colors.primary,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

/* Export
============================================================================= */
export default Text;
