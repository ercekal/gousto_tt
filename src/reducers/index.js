import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ItemsReducer from './reducer_items';
import SelectedCategoryReducer from './reducer_selectedCategory';
import SearchReducer from './reducer_search';


const rootReducer = combineReducers({
  categories: CategoriesReducer,
  items: ItemsReducer,
  selectedCategory: SelectedCategoryReducer,
  search: SearchReducer
});

export default rootReducer;
