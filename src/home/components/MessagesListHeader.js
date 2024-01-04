import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Text, Touchable, View} from '../../common';
import TickIcon from '../../assets/icons/tick-icon.svg';

import {ANDROID_AD_BANNER_ID_FOR_MESSAGE_PAGE} from '../../config/mobile-ads';
import {BannerAd} from 'react-native-google-mobile-ads';

/* =============================================================================
<MessagesListHeader />
=============================================================================*/
const MessagesListHeader = ({onUpdateMessage, onRandomNumber}) => {
  return (
    <View>
      <View style={styles.cardText}>
        <View style={styles.innerContainer} horizontal>
          <TickIcon />
          <Text style={styles.text} regular grey xs>
            Refresh the page every couple of minutes to get new messages.
          </Text>
        </View>
        <View style={styles.innerContainer} horizontal>
          <TickIcon />
          <Text style={styles.text} regular grey xs>
            Refresh the page every couple of minutes to get new messages.
          </Text>
        </View>
        <View style={styles.innerContainer} horizontal>
          <TickIcon />
          <Text style={styles.text} regular grey xs>
            Refresh the page every couple of minutes to get new messages.
          </Text>
        </View>
        <View style={styles.innerContainer} horizontal>
          <TickIcon />
          <Text style={styles.text} regular grey xs>
            Refresh the page every couple of minutes to get new messages.
          </Text>
        </View>
      </View>
      <Button onPress={onUpdateMessage} title="Update Massage" />
      <Touchable style={styles.btn} onPress={onRandomNumber}>
        <Text light medium sm>
          Give Me Another Number
        </Text>
      </Touchable>
      <View center>
        <BannerAd
          unitId={ANDROID_AD_BANNER_ID_FOR_MESSAGE_PAGE}
          size={'300x250'}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
      <Text style={styles.msgTxt} fs16 semibold>
        Messages
      </Text>
    </View>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  cardText: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#F9F8FD',
    borderWidth: 1,
    borderColor: '#F2F0FA',
  },
  text: {
    marginLeft: 10,
  },
  innerContainer: {
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: '#e9f3fe',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: '100%',
    borderRadius: 16,
    marginVertical: 10,
  },
  msgTxt: {
    marginVertical: 4,
    marginTop: 8,
  },
});

/* Export
============================================================================= */
export default MessagesListHeader;
