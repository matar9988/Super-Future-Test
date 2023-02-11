import * as Actions from './actions';

const initialState = {
  data: [],
  loading: false,
  error: false,
  isModalOpen: false,
  selectedPost: {},
  isUpdating: false
};


const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS_ACTION:
      return { ...state, data: action.payload.posts };

    case Actions.UPDATE_POST_REQUEST:
    case Actions.GET_POSTS_REQUEST:
    case Actions.ADD_POST_REQUEST:
      return { ...state, loading: true, error: false };


    case Actions.UPDATE_POST_SUCCESS: {
      let posts = [...state.data];
      let index = posts.findIndex((post) => post.id === action.payload.post.id);
      posts[index] = action.payload.post;
      return { ...state, loading: false, error: false, data: [...posts] }
    }

    case Actions.ADD_POST_SUCCESS:
    case Actions.GET_POSTS_SUCCESS:
      return { ...state, loading: false, error: false };

    case Actions.UPDATE_POST_FAILURE:
    case Actions.ADD_POST_FAILURE:
    case Actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: true };

    case Actions.OPEN_MODAL:
      return { ...state, isModalOpen: true };

    case Actions.CLOSE_MODAL:
      return { ...state, isModalOpen: false, isUpdating: false, selectedPost: {} };

    case Actions.UPDATE_POST: {
      Actions.openModal();
      return { ...state, selectedPost: action.payload.post, isUpdating: true };
    }

    default:
      return state;
  }
};

export default counterReducer;
