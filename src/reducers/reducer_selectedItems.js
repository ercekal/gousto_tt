import { FETCH_SELECTED_ITEM } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SELECTED_ITEM:
      return [action.payload.data, ...state];
  }
  return state;
}
