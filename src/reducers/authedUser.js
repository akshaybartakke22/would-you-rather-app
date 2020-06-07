import { SET_AUTHED_USER } from "../actions/authedUser";
import { RESET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = [], action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authUser;

    case RESET_AUTHED_USER:
      return action.authUser === null;

    default:
      return state;
  }
}
