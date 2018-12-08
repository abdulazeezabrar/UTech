import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  authUser : authReducer,
  form: formReducer
});
