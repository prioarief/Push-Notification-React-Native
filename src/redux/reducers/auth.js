const initialState = {
    data: {},
    errorMessage: null,
    isLoading: false,
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'LOGIN_REJECTED': {
        return {
          ...state,
          isLoading: false,
          errorMessage: action.payload.response.data.data,
        };
      }
      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          errorMessage: null,
          data: action.payload.data.data[0],
        };
      }
  
      case 'REGISTER_PENDING': {
        return {
          ...state,
          isLoading: true,
          data: {},
        };
      }
      case 'REGISTER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          data: {},
        };
      }
      case 'REGISTER_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  export default auth;
  