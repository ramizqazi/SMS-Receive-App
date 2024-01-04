import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text, Touchable, View} from '../../common';

import BackArrow from '../../assets/icons/arrow-back.svg';

/* =============================================================================
<PrivacyHeader />
============================================================================= */
const PrivacyHeader = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{height: insets.top + 105, paddingTop: insets.top}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#101CE7', '#2DACFF']}>
      <View style={styles.headerContainer}>
        <Touchable
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <BackArrow />
        </Touchable>
        <View flex={1} center>
          <View horizontal>
            <Text white semibold xl>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  headerContainer: {
    padding: 30,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

/* Export
============================================================================= */
export default PrivacyHeader;
