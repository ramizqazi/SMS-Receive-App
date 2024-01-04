import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Container, Content, Text} from '../../common';
import PrivacyHeader from '../components/PrivacyHeader';

/* =============================================================================
<ProfileScreen />
============================================================================= */
const ProfileScreen = () => {
  return (
    <Container>
      <PrivacyHeader />
      <Content style={styles.padding} containerStyle={styles.content}>
        <Text style={styles.txt} regular xs>
          Morbi sit sed mi eget. Iaculis amet cras non ultrices nullam. Neque
          gravida mi at condimentum tortor tortor. Consequat cras nunc, sed
          turpis imperdiet neque sollicitudin orci, pretium. Nibh euismod
          egestas pulvinar placerat enim. Nisl urna eu enim, egestas a est
          pellentesque purus mollis. Consectetur odio diam arcu amet, vulputate
          arcu magna. Duis non mattis in quis. Augue ut aliquam blandit sed ut.
        </Text>
        <Text style={styles.txt} regular grey xs>
          Morbi sit sed mi eget. Iaculis amet cras non ultrices nullam. Neque
          gravida mi at condimentum tortor tortor. Consequat cras nunc, sed
          turpis imperdiet neque sollicitudin orci, pretium. Nibh euismod
          egestas pulvinar placerat enim. Nisl urna eu enim, egestas a est
          pellentesque purus mollis. Consectetur odio diam arcu amet, vulputate
          arcu magna. Duis non mattis in quis. Augue ut aliquam blandit sed ut.
        </Text>
        <Text style={styles.txt} regular xs>
          Morbi sit sed mi eget. Iaculis amet cras non ultrices nullam. Neque
          gravida mi at condimentum tortor tortor. Consequat cras nunc, sed
          turpis imperdiet neque sollicitudin orci, pretium. Nibh euismod
          egestas pulvinar placerat enim. Nisl urna eu enim, egestas a est
          pellentesque purus mollis. Consectetur odio diam arcu amet, vulputate
          arcu magna. Duis non mattis in quis. Augue ut aliquam blandit sed ut.
        </Text>
        <Text style={styles.txt} regular xs>
          Morbi sit sed mi eget. Iaculis amet cras non ultrices nullam. Neque
          gravida mi at condimentum tortor tortor. Consequat cras nunc, sed
          turpis imperdiet neque sollicitudin orci, pretium. Nibh euismod
          egestas pulvinar placerat enim. Nisl urna eu enim, egestas a est
          pellentesque purus mollis. Consectetur odio diam arcu amet, vulputate
          arcu magna. Duis non mattis in quis. Augue ut aliquam blandit sed ut.
        </Text>
      </Content>
    </Container>
  );
};

/* Style
============================================================================= */
const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: -20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  padding: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  txt: {
    lineHeight: 25,
    marginVertical: 10,
    color: 'rgba(11, 42, 70, 0.4)',
  },
});

/* Export
============================================================================= */
export default ProfileScreen;
