/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: RootSaga of Redux
 */

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
