import React from 'react';
import { StyleSheet, View as RNView } from 'react-native';

/* =============================================================================
<View />
============================================================================= */
const View = ({
  style,
  flex,
  block,
  center,
  spacebetween,
  children,
  horizontal,
  ...props
}) => (
  <RNView
    style={[
      flex && styles.flex,
      block && styles.block,
      center && styles.center,
      horizontal && styles.horizontal,
      spacebetween && styles.spacebetween,
      style,
    ]}
    {...props}>
    {children}
  </RNView>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  block: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
});

/* Export
============================================================================= */
export default View;