import { FETCH_CATEGORIES } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
    return {...state, categories: action.payload.data };
  }
  return state;
}
