import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TextInput, View} from '../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Search from '../../assets/icons/search.svg';

/* =============================================================================
<HomeHeader />
============================================================================= */
const HomeHeader = ({search, onSearch}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      style={{height: insets.top + 200, paddingTop: insets.top}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#101CE7', '#2DACFF']}>
      <View style={styles.headerContainer}>
        <Text style={styles.text} white xl semibold>
          Receive SMS Online Instantly
        </Text>

        <TextInput
          value={search}
          left={<Search />}
          onChange={onSearch}
          placeholder="Search"
        />
      </View>
    </LinearGradient>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flex: 1,
    zIndex: 1,
    paddingBottom: 10,
  },
  text: {
    marginVertical: 15,
  },
});

/* Export
============================================================================= */
export default HomeHeader;
