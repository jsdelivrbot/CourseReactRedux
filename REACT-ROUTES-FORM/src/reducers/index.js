import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
