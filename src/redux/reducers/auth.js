const initialState = {
  data: {},
  errorMessage: null,
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    }

    case 'UPLOAD': {
      return {
        ...state,
        isLoading: true,
        data: {...state.data, foto: action.payload},
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
