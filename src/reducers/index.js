import {combineReducers} from 'redux';
import common from './common';
import home from './home';
import detail from './detail';

const reducer = combineReducers({
    common,
    home,
    detail
});
export default reducer;
