import {Platform} from 'react-native';
import {AppOpenAd, InterstitialAd} from 'react-native-google-mobile-ads';

export const ANDROID_AD_BANNER_ID_FOR_HOME_PAGE =
  Platform.OS === 'android'
    ? 'ca-app-pub-1370629501360110/6653945515'
    : 'ca-app-pub-1370629501360110/6653945515';

export const ANDROID_AD_BANNER_ID_FOR_MESSAGE_PAGE =
  Platform.OS === 'android'
    ? 'ca-app-pub-1370629501360110/4831358263'
    : 'ca-app-pub-1370629501360110/4831358263';

export const AD_INTERSTITIAL_ID =
  Platform.OS === 'android'
    ? 'ca-app-pub-1370629501360110/6655575823'
    : 'ca-app-pub-1370629501360110/6655575823';

export const APP_OPEN_AD_ID =
  Platform.OS === 'android'
    ? 'ca-app-pub-1370629501360110/7445913312'
    : 'ca-app-pub-1370629501360110/7445913312';

export const interstitial = InterstitialAd.createForAdRequest(
  AD_INTERSTITIAL_ID,
  {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  },
);

export const appOpenAd = AppOpenAd.createForAdRequest(APP_OPEN_AD_ID, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
