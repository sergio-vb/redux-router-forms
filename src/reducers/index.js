import { combineReducers } from 'redux';

import postsReducer from './PostsReducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
