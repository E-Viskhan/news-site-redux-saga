import { SET_CURRENT_PATHNAME } from "../constants";

const initialState = {
  pathname: '',
};

const location = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PATHNAME:
      return {
        ...state,
        pathname: payload,
      };
    default: return state;
  }
};

export default location;