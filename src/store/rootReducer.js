import { combineReducers } from 'redux';
import postReducer from './modules/posts/reducer';

export default combineReducers({
    posts: postReducer,
});
