import React, {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

import AppNavigation from './navigation/AppNavigation';

import mobileAds, {AdEventType} from 'react-native-google-mobile-ads';
import {appOpenAd} from './config/mobile-ads';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
const store = configureStore();

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    appOpenAd.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, [appStateVisible]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        if (adLoaded) {
          appOpenAd.show();
          setAdLoaded(false);
        }
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [adLoaded]);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

/* Export
============================================================================= */
export default App;
