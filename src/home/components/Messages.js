import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Clipboard, ToastAndroid, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';

import { Text, View } from '../../common';

/* =============================================================================
<Messages />
============================================================================= */
const Messages = ({ item }) => {

  const _handleCopyMessage = async () => {
    const isAppReviewd = await AsyncStorage.getItem('@receiveSms/isAppReviewd');

    if (isAppReviewd !== 'true') {
      await AsyncStorage.setItem('@receiveSms/isAppReviewd', 'true');

      if (Platform.OS != 'ios') {
        //To open the Google Play Store
        await Linking.openURL(`market://details?id=com.jb.receivesms`).catch(err =>
          alert('Please check for the Google Play Store')
        );
      } else {
        //To open the Apple App Store
        await Linking.openURL(
          `itms://itunes.apple.com/in/app/apple-store/Test`
        ).catch(err => alert('Please check for the App Store'));
      }
    }

    const extractedCode = item?.message?.match(/\d+\s*\d*/);

    if (extractedCode[0]) {
      Clipboard.setString(`${extractedCode[0]}`);
      ToastAndroid.show('Code Copied', ToastAndroid.SHORT);
    } else {
      Clipboard.setString(item?.message);
      ToastAndroid.show('Message Copied', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.cardText}>
      <View style={styles.topContainer} spacebetween horizontal>
        <View horizontal style={{ columnGap: 10, }}>
          <Text semibold fs16>
            {item.from}
          </Text>
          <Text grey regular xs>
            {item.timestamp}
          </Text>
        </View>
        <TouchableOpacity onPress={_handleCopyMessage} style={styles.copyIcon}>
          <Feather name='copy' color='#999' size={18} />
          <Text style={{ color: '#999', textDecorationLine: 'underline' }} sm>Copy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text} regular grey sm>
        {item.message}
      </Text>
    </View>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  cardText: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#F9F8FD',
    borderWidth: 1,
    borderColor: '#F2F0FA',
  },
  topContainer: {
    paddingBottom: 10,
  },
  copyIcon: {
    padding: 5,
    columnGap: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

/* Export
============================================================================= */
export default Messages;
