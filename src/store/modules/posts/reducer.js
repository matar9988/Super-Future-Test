import * as Actions from './actions';

const initialState = {
  data: [],
  hasMore: true,
  loading: false,
  error: { exist: false, message: '' },
  isModalOpen: false,
  selectedPost: {},
  isUpdating: false,
  isDeleting: false
};


const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS_ACTION: {
      if (action.payload.posts.length === 0 ) return {...state, hasMore: false}
      let data = [...state.data, ...action.payload.posts]
      return { ...state, data };
    }

    case Actions.GET_POSTS_REQUEST:
      return { ...state, error: { exist: false, message: '' } }

    case Actions.DELETE_POST_REQUEST:
    case Actions.UPDATE_POST_REQUEST:
    case Actions.ADD_POST_REQUEST:
      return { ...state, loading: true, error: { exist: false, message: '' } };


    case Actions.UPDATE_POST_SUCCESS: {
      let posts = [...state.data];
      let index = posts.findIndex((post) => post.id === action.payload.post.id);
      posts[index] = action.payload.post;
      return { ...state, loading: false, error: { exist: false, message: '' }, data: [...posts] }
    }

    case Actions.DELETE_POST_SUCCESS: {
      let posts = [...state.data];
      let index = posts.findIndex((post) => post.id === action.payload.post.id);
      posts.splice(index, 1);
      return { ...state, loading: false, error: { exist: false, message: '' }, data: [...posts] }
    }

    case Actions.ADD_POST_SUCCESS:
      return { ...state, loading: false, error: { exist: false, message: '' }, data: [action.payload.post, ...state.data] };

    case Actions.GET_POSTS_SUCCESS:
      return { ...state, loading: false, error: { exist: false, message: '' } };

    case Actions.DELETE_POST_FAILURE:
      return { ...state, loading: false, error: { exist: true, message: Actions.DELETE_POST_FAILURE } };

    case Actions.UPDATE_POST_FAILURE:
      return { ...state, loading: false, error: { exist: true, message: Actions.UPDATE_POST_FAILURE } };

    case Actions.ADD_POST_FAILURE:
      return { ...state, loading: false, error: { exist: true, message: Actions.ADD_POST_FAILURE } };

    case Actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: { exist: true, message: Actions.GET_POSTS_FAILURE } };

    case Actions.OPEN_MODAL:
      return { ...state, isModalOpen: true };

    case Actions.CLOSE_MODAL:
      return { ...state, isModalOpen: false, isUpdating: false, isDeleting: false, selectedPost: {} };

    case Actions.UPDATE_POST: {
      Actions.openModal();
      return { ...state, selectedPost: action.payload.post, isUpdating: true, isDeleting: false };
    }

    case Actions.DELETE_POST: {
      Actions.openModal();
      return { ...state, selectedPost: action.payload.post, isDeleting: true, isUpdating: false };
    }

    case Actions.REMOVE_FAILURE:
      return { ...state, error: { exist: false, message: '' } };

    default:
      return state;
  }
};

export default postReducer;
