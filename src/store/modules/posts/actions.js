export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const GET_POSTS_ACTION = 'GET_POSTS_ACTION';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const getPostsRequest = (page = 0) => ({
    type: GET_POSTS_REQUEST,
    payload: { page }
});

export const getPostsSuccess = () => ({
    type: GET_POSTS_SUCCESS
});

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
});

export const getPostsAction = (posts) => ({
    type: GET_POSTS_ACTION,
    payload: { posts }
});

export const addPostRequest = (post) => ({
    type: ADD_POST_REQUEST,
    payload: { post }
});

export const addPostSuccess = () => ({
    type: ADD_POST_SUCCESS
});

export const addPostFailure = () => ({
    type: ADD_POST_FAILURE
});

export const updatePostRequest = (post) => ({
    type: UPDATE_POST_REQUEST,
    payload: { post }
});

export const updatePostSuccess = (post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: { post }
});

export const updatePostFailure = () => ({
    type: UPDATE_POST_FAILURE
});

export const deletePostRequest = (post) => ({
    type: DELETE_POST_REQUEST,
    payload: { post }
});

export const deletePostSuccess = (post) => ({
    type: DELETE_POST_SUCCESS,
    payload: { post }
});

export const deletePostFailure = () => ({
    type: DELETE_POST_FAILURE
});

export const openModal = () => ({
    type: OPEN_MODAL
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: { post }
});

export const deletePost = (post) => ({
    type: DELETE_POST,
    payload: { post }
});
