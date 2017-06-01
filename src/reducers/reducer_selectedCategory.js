import { SELECTED_CATEGORY } from '../actions/index'

export default function(state = "", action) {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return {...state, selectedTitle: action.payload}
    default:
      return state;
  }
}
