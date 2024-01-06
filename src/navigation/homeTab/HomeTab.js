import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';

import HomeActive from '../../assets/icons/home-Active.svg';
import HomeInActive from '../../assets/icons/home-inActive.svg';
import DetailActive from '../../assets/icons/detail-Active.svg';
import DetailInActive from '../../assets/icons/detail-inActive.svg';
import ProfileInActive from '../../assets/icons/profile.svg';

import { getSelectedNumber } from '../../home/redux/selectors';

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = ({ state, navigation }) => {
  const insets = useSafeArea();

  const _safeAreaStyle = {
    paddingBottom: insets.bottom,
    height: TAB_BAR_HEIGHT + insets.bottom,
  };

  const selectedNumber = useSelector(s => getSelectedNumber(s));

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, _safeAreaStyle]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const icon = isFocused
            ? ICONS[index].active
            : ICONS[index].inActive;

          const onPress = async () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              if (route.name === 'NumberDetails') {
                if (selectedNumber) {
                  navigation.navigate('NumberDetails');
                }
              } else {
                navigation.navigate(route.name);
              }
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={1}
              onPress={onPress}
              style={[styles.item, isFocused && styles.activeItem]}>
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const TAB_BAR_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
  },
  innerContainer: {
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeItem: {
    borderTopWidth: 2,
    borderColor: '#101CE7',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  label: {
    fontSize: 10,
    color: '#0A40A4',
  },
  inActiveLabel: {
    fontSize: 10,
    color: '#0A40A4',
    opacity: 0.3,
  },
});

const ICONS = [
  { inActive: <HomeInActive />, active: <HomeActive /> },
  { inActive: <DetailInActive />, active: <DetailActive /> },
  { inActive: <ProfileInActive />, active: <ProfileInActive /> },
];

export default HomeTab;
