import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';

import {getLoading} from '../redux/selectors';

/* =============================================================================
<Loading />
============================================================================= */
const Loading = () => {
  const loading = useSelector(state => getLoading(state));

  return <Spinner visible={loading} />;
};

export default Loading;
