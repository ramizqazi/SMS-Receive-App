import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Container } from '../../common';

import Loading from '../components/Loading';
import Messages from '../components/Messages';
import DetailHeader from '../components/DetailHeader';
import MessagesListHeader from '../components/MessagesListHeader';

import * as Colors from '../../config/colors';

import { AdEventType } from 'react-native-google-mobile-ads';
import { interstitial } from '../../config/mobile-ads';

import { useDispatch, useSelector } from 'react-redux';
import {
  getNumberMessages as getNumberMessagesAction,
  selectRandomNumber as selectRandomNumberAction,
} from '../redux/actions';
import {
  getLoading as getLoadingSelector,
  getSelectedNumber as getSelectedNumberSelector,
  getNumberMessages as getNumberMessagesSelector,
} from '../redux/selectors';

/* =============================================================================
<NumberDetailsScreen />
============================================================================= */
const NumberDetailsScreen = () => {
  const dispatch = useDispatch();

  const [interstitialLoaded, setInterstitialLoaded] = useState(false);

  const numberDetails = useSelector(state => getSelectedNumberSelector(state));
  const numberMessages = useSelector(state => getNumberMessagesSelector(state));
  const loader = useSelector(state => getLoadingSelector(state));

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

  useEffect(() => {
    dispatch(getNumberMessagesAction(numberDetails.number));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberDetails, numberDetails.number]);

  const _reFetchNumberMessages = () => {
    dispatch(getNumberMessagesAction(numberDetails.number));
  };

  const _handleRandomNumber = () => {
    dispatch(selectRandomNumberAction());
  };
  if (!numberDetails) {
    return null;
  }

  return (
    <Container>
      <DetailHeader value={numberDetails} />
      <FlatList
        data={numberMessages}
        ListEmptyComponent={
          loader && <ActivityIndicator size={30} color={Colors.black} />
        }
        renderItem={renderItem}
        style={styles.contentContainer}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <MessagesListHeader
            onRandomNumber={_handleRandomNumber}
            onUpdateMessage={_reFetchNumberMessages}
          />
        }
      />

      <Loading />
    </Container>
  );
};

const renderItem = ({ item }) => <Messages item={item} />;

/* Style
============================================================================= */
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: -20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: { padding: 20 },
});

/* Export
============================================================================= */
export default NumberDetailsScreen;
