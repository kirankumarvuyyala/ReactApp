import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/Reducers'

// import { createStore } from 'redux'
import rootReducer from '../reducers/Reducer';	

export default configureStore({
  reducer: {
    counter: counterReducer,
 rootReducer,
  },
});