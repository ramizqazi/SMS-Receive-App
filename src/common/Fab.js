import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as Colors from '../config/colors';

/* =============================================================================
<Fab />
============================================================================= */
const Fab = ({
  activeOpacity,
  onPress,
  backgroundColor,
  xPosition,
  yPosition,
  icon,
  iconColor,
}) => {
  const styles = {
    zIndex: 1,
    width: 56,
    height: 56,
    padding: 10,
    elevation: 3,
    backgroundColor,
    borderRadius: 28,
    shadowOpacity: 0.5,
    position: 'absolute',
    alignItems: 'center',
    shadowColor: '#1E1E1E',
    justifyContent: 'center',
    shadowOffset: {width: 2, height: 2},
    left: xPosition === 'left' ? 30 : null,
    right: xPosition === 'right' ? 30 : null,
    top: yPosition === 'top' ? 80 : null,
    bottom: yPosition === 'bottom' ? 30 : null,
  };
  return (
    <TouchableOpacity
      style={styles}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <Icon name={icon} size={20} color={iconColor} />
    </TouchableOpacity>
  );
};

/* Default Props
============================================================================= */
Fab.defaultProps = {
  activeOpacity: 0.8,
  backgroundColor: Colors.primary,
  xPosition: 'right',
  yPosition: 'bottom',
  icon: 'plus',
  iconColor: Colors.secondary,
};
/* Exports
============================================================================= */
export default Fab;
