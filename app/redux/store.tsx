// eslint-disable-next-line import/no-extraneous-dependencies

import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
});

export { store };
