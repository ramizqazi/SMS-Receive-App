import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {AdEventType, BannerAd} from 'react-native-google-mobile-ads';

import {Container, Text, Touchable, View} from '../../common';

import HomeHeader from '../components/HomeHeader';
import Loading from '../components/Loading';

import i18nIsoCountries from 'i18n-iso-countries';
import {useNavigation} from '@react-navigation/native';
import CountryFlag from 'react-native-country-flag';

import {
  ANDROID_AD_BANNER_ID_FOR_HOME_PAGE,
  interstitial,
} from '../../config/mobile-ads';

import * as Colors from '../../config/colors';

import {useDispatch, useSelector} from 'react-redux';
import {getNumbers, selectNumber} from '../redux/actions';
import {
  getLoading,
  getNumbers as getNumbersSelectors,
} from '../redux/selectors';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);

  const countryNumbers = useSelector(state => getNumbersSelectors(state));
  const loader = useSelector(state => getLoading(state));

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (interstitialLoaded) {
      interstitial.show();
    }
  }, [interstitialLoaded]);

  const _handleSearch = query => {
    setSearch(query);
    const newSearch = countryNumbers.filter(item => {
      const searchTerm = query.toLowerCase();
      const PrefixNumber = item.Prefix.toLowerCase();
      const number = item.number.toLowerCase();
      return PrefixNumber.includes(searchTerm) || number.includes(searchTerm);
    });
    setSearchData(newSearch);
  };

  useEffect(() => {
    dispatch(getNumbers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _refetchNumbers = () => {
    dispatch(getNumbers());
  };

  return (
    <Container>
      <HomeHeader search={search} onSearch={_handleSearch} />

      <FlatList
        ListEmptyComponent={
          loader && <ActivityIndicator size={30} color={Colors.black} />
        }
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        data={search ? searchData : countryNumbers}
        contentContainerStyle={styles.padding}
        refreshing={loader && !!countryNumbers.length}
        onRefresh={_refetchNumbers}
      />
      <View center>
        <BannerAd
          unitId={ANDROID_AD_BANNER_ID_FOR_HOME_PAGE}
          size={'320x50'}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>

      <Loading />
    </Container>
  );
};

const renderItem = ({item}) => <CountryListItem item={item} />;

const CountryListItem = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  const countryName = i18nIsoCountries.getName(item.country, 'en');

  const _moveToNumberDetails = async () => {
    dispatch(selectNumber(item));

    navigation.navigate('NumberDetails');
  };

  return (
    <Touchable
      onPress={_moveToNumberDetails}
      key={item.id}
      style={styles.countryCard}>
      <CountryFlag isoCode={item.country} style={styles.image} />
      <View style={styles.textContainer}>
        <Text fs16 semibold>
          {`${item.Prefix} ${item.number}`}
        </Text>
        <Text xs grey regular>
          {countryName}
        </Text>
      </View>
    </Touchable>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  flatList: {
    marginTop: -30,
    zIndex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  padding: {
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  countryCard: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#F9F8FD',
    borderWidth: 1,
    borderColor: '#F2F0FA',
  },
  textContainer: {
    paddingLeft: 15,
  },
});

/* Exports
============================================================================= */
export default HomeScreen;
