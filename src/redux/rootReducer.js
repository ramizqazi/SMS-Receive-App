import {combineReducers} from 'redux';
import NumberReducers from '../home/redux/reducer';

const rootReducer = combineReducers({
  Numbers: NumberReducers,
});

export default rootReducer;
