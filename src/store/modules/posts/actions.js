export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const GET_POSTS_ACTION = 'GET_POSTS_ACTION';

export const getPostsRequest = () => ({
    type: GET_POSTS_REQUEST
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
