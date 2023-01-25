import { GET_PEOPLE_DATA_TOP, GET_PEOPLE_DATA_BOTTOM } from "../actions";

const initialState = {
  top: [],
  bottom: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_DATA_TOP:
      return {
        ...state,
        top: action.payload,
      };

    case GET_PEOPLE_DATA_BOTTOM:
      return {
        ...state,
        bottom: action.payload,
      };

      
    default:
      return state;
  }
};

export default getData;
