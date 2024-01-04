import * as constants from './constants';

export const INITIAL_STATE = {
  numbers: [],
  messages: [],
  selectedNumber: null,
  loading: false,
  error: null,
};

/* =============================================================================
  Numbers
============================================================================= */
export default function reducer(state = INITIAL_STATE, action) {
  const {type, error, payload} = action;

  switch (type) {
    // GET_NUMBERS:
    case constants.SELECT_NUMBER:
      return {
        ...state,
        selectedNumber: payload,
      };

    // UN_SELECT_NUMBER:
    case constants.UN_SELECT_NUMBER:
      return {
        ...state,
        selectedNumber: null,
      };

    // GET_NUMBERS:
    case constants.GET_NUMBERS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_NUMBERS.SUCCESS:
      return {
        ...state,
        numbers: payload,
        error: null,
      };
    case constants.GET_NUMBERS.FAIL:
      return {
        ...state,
        error: error,
      };
    case constants.GET_NUMBERS.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // GET_NUMBER_MESSAGES:
    case constants.GET_NUMBER_MESSAGES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_NUMBER_MESSAGES.SUCCESS:
      return {
        ...state,
        messages: payload,
        error: null,
      };
    case constants.GET_NUMBER_MESSAGES.FAIL:
      return {
        ...state,
        error: error,
      };
    case constants.GET_NUMBER_MESSAGES.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
