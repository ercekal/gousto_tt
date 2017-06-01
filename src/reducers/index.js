import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ItemsReducer from './reducer_items';
import SelectedCategoryReducer from './reducer_selectedCategory';


const rootReducer = combineReducers({
  categories: CategoriesReducer,
  items: ItemsReducer,
  selectedCategory: SelectedCategoryReducer
});

export default rootReducer;
