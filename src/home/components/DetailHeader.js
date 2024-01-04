import React from 'react';
import {StyleSheet, Clipboard, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Touchable, View} from '../../common';
import CountryFlag from 'react-native-country-flag';
import i18nIsoCountries from 'i18n-iso-countries';

import BackArrow from '../../assets/icons/arrow-back.svg';
import CopyIcon from '../../assets/icons/copy.svg';

import {useDispatch} from 'react-redux';
import {getNumbers} from '../redux/actions';

/* =============================================================================
<DetailHeader />
============================================================================= */
const DetailHeader = ({value}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  const countryName = value.country
    ? i18nIsoCountries.getName(value.country, 'en')
    : '';
  const copyNumberToClipboard = () => {
    Clipboard.setString(`${value?.Prefix} ${value?.number}`);
    ToastAndroid.show('Phone Number is Copy', ToastAndroid.SHORT);
  };

  const _handleGoBack = () => {
    navigation.goBack();
    dispatch(getNumbers());
  };

  return (
    <LinearGradient
      style={{height: insets.top + 200, paddingTop: insets.top}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#101CE7', '#2DACFF']}>
      <View style={styles.headerContainer}>
        <Touchable style={styles.iconContainer} onPress={_handleGoBack}>
          <BackArrow />
        </Touchable>
        <View flex={1} center>
          {value.country && (
            <CountryFlag isoCode={value.country} style={styles.image} />
          )}
          <View horizontal>
            <Text center white semibold xl>
              {`${value?.Prefix} ${value?.number}`}
            </Text>
            <Touchable onPress={copyNumberToClipboard} style={styles.copyIcon}>
              <CopyIcon />
            </Touchable>
          </View>
          <Text center white medium sm>
            {countryName}
          </Text>
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
  blur: {
    height: 20,
    width: 20,
  },
  image: {
    height: 60,
    width: 80,
    resizeMode: 'stretch',
    marginBottom: 15,
    borderRadius: 8,
  },
  copyIcon: {
    marginLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
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
export default DetailHeader;
