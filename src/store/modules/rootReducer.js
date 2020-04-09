/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Rootreducer of Redux
 */

import { combineReducers } from 'redux';
import auth from './auth/reducer';

export default combineReducers({ auth });
