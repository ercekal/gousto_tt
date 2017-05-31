import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  items: ItemsReducer,
});

export default rootReducer;
