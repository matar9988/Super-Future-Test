import { takeLatest, put, call, all } from 'redux-saga/effects';
import { getPosts, addPost, updatePost, deletePost } from '../../../network/posts';
import {
  ADD_POST_REQUEST,
  GET_POSTS_REQUEST,
  UPDATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  getPostsAction,
  getPostsSuccess,
  getPostsFailure,
  addPostSuccess,
  addPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
  closeModal
} from './actions';

export function* getPostsSaga(action) {
  try {
    const posts = yield call(getPosts, action.payload.page);
    yield put(getPostsAction(posts));
    yield put(getPostsSuccess());
  } catch (e) {
    yield put(getPostsFailure());
    console.log('Failed initializing the posts list.');
  }
}

export function* addPostSaga(action) {
  try {
    const post = yield call(addPost, action.payload.post);
    yield put(addPostSuccess(post));
  } catch (e) {
    yield put(addPostFailure());
    console.log('Failed initializing the posts list.');
  }
}

export function* updatePostSaga(action) {
  try {
    yield call(updatePost, action.payload.post);
    yield put(updatePostSuccess(action.payload.post));
  } catch (e) {
    yield put(updatePostFailure());
    console.log('Failed initializing the posts list.');
  }
}

export function* deletePostSaga(action) {
  try {
    yield call(deletePost, action.payload.post);
    yield put(closeModal());
    yield put(deletePostSuccess(action.payload.post));
  } catch (e) {
    yield put(deletePostFailure());
    yield put(closeModal());
    console.log('Failed initializing the posts list.');
  }
}

export function* watchPostsSaga() {
  yield all([
    takeLatest([GET_POSTS_REQUEST], getPostsSaga),
    takeLatest([ADD_POST_REQUEST], addPostSaga),
    takeLatest([UPDATE_POST_REQUEST], updatePostSaga),
    takeLatest([DELETE_POST_REQUEST], deletePostSaga),
  ])
}
