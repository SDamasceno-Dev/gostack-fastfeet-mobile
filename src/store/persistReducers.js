/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Persist Reducer of Redux Saga
 */

import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeetMob',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
