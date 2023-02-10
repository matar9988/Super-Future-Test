export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const GET_POSTS_ACTION = 'GET_POSTS_ACTION';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const getPostsRequest = (page = 0) => ({
    type: GET_POSTS_REQUEST,
    payload: {page}
});

export const getPostsSuccess = () => ({
    type: GET_POSTS_SUCCESS
});

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
});

export const getPostsAction = (posts) => ({
    type: GET_POSTS_ACTION,
    payload: {posts}
});

export const openModal = () => ({
    type: OPEN_MODAL
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});
