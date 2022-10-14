import { SET_LOADING_DATA } from "../constants";

const initialState = {
  isLoadingData: false
};

const loader = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_DATA:
      return { ...state, isLoadingData: payload };
    default: return state;
  }
}

export default loader;