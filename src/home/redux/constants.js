import {actionGenerator} from '../../util/reduxHelper';

export const SELECT_NUMBER = 'NUMBERS/SELECT_NUMBER';

export const UN_SELECT_NUMBER = 'NUMBERS/UN_SELECT_NUMBER';

export const GET_NUMBERS = actionGenerator('NUMBERS/GET_NUMBERS');

export const GET_NUMBER_MESSAGES = actionGenerator(
  'NUMBERS/GET_NUMBER_MESSAGES',
);
