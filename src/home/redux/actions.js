import axios from 'axios';
import * as constants from './constants';

/*
 * SELECT_NUMBER
 */
export const selectNumber = details => async dispatch => {
  dispatch({type: constants.SELECT_NUMBER, payload: details});
};

/*
 * SELECT_RANDOM_NUMBER
 */
export const selectRandomNumber = () => async (dispatch, getState) => {
  try {
    const numbers = getState().Numbers.numbers;

    const randomNumber = Math.floor(Math.random() * numbers.length);

    const randomNumberDetails = numbers[randomNumber];

    dispatch({type: constants.SELECT_NUMBER, payload: randomNumberDetails});

    dispatch(getNumberMessages(randomNumberDetails.number));
  } catch (e) {
    console.log(e);
  }
};

/*
 * UN_SELECT_NUMBER
 */
export const unSelectNumber = () => async dispatch => {
  dispatch({type: constants.UN_SELECT_NUMBER});
};

/*
 * GET_NUMBERS
 */
export const getNumbers = () => async dispatch => {
  try {
    dispatch({type: constants.GET_NUMBERS.REQUEST});
    const res = await axios.get('https://r.getsmss.com/numbers');
    const numbers = res.data.map((item, index) => ({
      id: index,
      ...item,
    }));

    dispatch({
      type: constants.GET_NUMBERS.SUCCESS,
      payload: numbers,
    });
  } catch (error) {
    dispatch({
      type: constants.GET_NUMBERS.FAIL,
      error,
    });
  } finally {
    dispatch({type: constants.GET_NUMBERS.COMPLETE});
  }
};

/*
 * GET_NUMBER_MESSAGES
 */
export const getNumberMessages = selectedNumber => async dispatch => {
  try {
    dispatch({type: constants.GET_NUMBER_MESSAGES.REQUEST});

    const res = await axios.get(
      `https://r.getsmss.com/sms/${selectedNumber}`,
    );
    console.log('MESSAGES',  res.data, selectedNumber)

    const messages = res.data.map((item, index) => ({
      id: index,
      ...item,
    }));

    dispatch({
      type: constants.GET_NUMBER_MESSAGES.SUCCESS,
      payload: messages,
    });
  } catch (error) {
    dispatch({
      type: constants.GET_NUMBER_MESSAGES.FAIL,
      error,
    });
  } finally {
    dispatch({type: constants.GET_NUMBER_MESSAGES.COMPLETE});
  }
};
