import React from 'react';
import {StyleSheet, View} from 'react-native';

import * as Colors from '../config/colors';

/* =============================================================================
<Card />
============================================================================= */
const Card = ({
  width,
  height,
  horizontal,
  center,
  children,
  style,
  shadow,
  ...props
}) => {
  const _style = {
    width,
    height,
  };

  const _center = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View
      style={[
        _style,
        styles.container,
        center && _center,
        horizontal && styles.horizontal,
        shadow ? styles.shadow : null,
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

Card.defaultProps = {
  shadow: true,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    // overflow: 'hidden',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Card;
