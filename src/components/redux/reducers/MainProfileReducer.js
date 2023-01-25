import { PROFILE_DETAILS } from "../actions";
import { GET_EXPERIENCE_DETAILS } from "../actions";
import { EXP_TO_EDIT } from "../actions";
import { OTHER_USER_DETAILS } from "../actions";
import { EDIT_PROFILE } from "../actions";
import { GET_EXPERIENCE_DETAILS_OTHER } from "../actions";

const initialstate = {
  profilename: [],
  experience: [],
  toEdit: [],
  otherUser: [],
  otherExperience: []
};

const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PROFILE_DETAILS:
      return {
        ...state,
        profilename: action.payload,
      };
    case OTHER_USER_DETAILS:
      return {
        ...state,
        otherUser: action.payload,
      };
    case GET_EXPERIENCE_DETAILS:
      return {
        ...state,
        experience: action.payload,
      };
    case GET_EXPERIENCE_DETAILS_OTHER:
      return {
        ...state,
        otherExperience: action.payload,
      };
    case EXP_TO_EDIT:
      return {
        ...state,
        toEdit: action.payload,
      };
    case EDIT_PROFILE: {
      return {
        ...state,
        profilename: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
