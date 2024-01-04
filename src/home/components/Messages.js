import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from '../../common';

/* =============================================================================
<Messages />
============================================================================= */
const Messages = ({item}) => {
  return (
    <View style={styles.cardText}>
      <View style={styles.topContainer} spacebetween horizontal>
        <Text semibold fs16>
          {item.from}
        </Text>
        <Text grey regular xs>
          {item.timestamp}
        </Text>
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
});

/* Export
============================================================================= */
export default Messages;
