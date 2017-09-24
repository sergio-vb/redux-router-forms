import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from './PostsReducer';
import activePostReducer from './ActivePostReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  activePost: activePostReducer,
  form: formReducer
});

export default rootReducer;
