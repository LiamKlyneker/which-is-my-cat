import { combineReducers } from 'redux';

import { CHARACTERS } from './Characters/constants';
import charactersReducer from './Characters/reducer';

const rootReducer = combineReducers({
  [CHARACTERS]: charactersReducer,
});

export default rootReducer;
