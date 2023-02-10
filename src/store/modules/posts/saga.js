import { takeLatest, put, call, all } from 'redux-saga/effects';
import { getPosts } from '../../../network/posts';
import {
   GET_POSTS_REQUEST,
   getPostsAction,
   getPostsSuccess,
   getPostsFailure
} from './actions';

export function* initPostsSaga(action) {
    console.log(action);
  try {
    const posts = yield call(getPosts,action.payload.page);
    yield put(getPostsAction(posts));
    yield put(getPostsSuccess());
  } catch (e) {
    yield put(getPostsFailure());
    console.log('Failed initializing the posts list.');
  }
}

export function* watchPostsSaga() {
  yield all([
    takeLatest([ GET_POSTS_REQUEST ], initPostsSaga),
  ])
}
