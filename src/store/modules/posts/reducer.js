import * as Actions from './actions';

const initialState = {
    data: [],
    loading: false,
    error: false,
    isModalOpen: false
  };
  

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS_ACTION:
      return { ...state, data: action.payload.posts };

    case Actions.GET_POSTS_REQUEST:
      return { ...state, loading: true, error: false };

    case Actions.GET_POSTS_SUCCESS:
      return { ...state, loading: false, error: false };

    case Actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: true };

    case Actions.OPEN_MODAL:
      return { ...state, isModalOpen: true};

    case Actions.CLOSE_MODAL:
      return { ...state, isModalOpen: false};

    default:
      return state;
  }
};

export default counterReducer;
