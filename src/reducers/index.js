import * as activities from './activities';
import * as selection from './selection';
import * as companies from './companies';
import routes from './routes';

import { combineReducers } from 'redux';

const reducer = combineReducers(Object.assign({}, routes, activities,  selection, companies));
export default reducer;
