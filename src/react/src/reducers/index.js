import { combineReducers } from 'redux';

/* panel */
import MenuReducer from './panel/menu/items';
import HeaderOpenedReducer from './panel/header/opened';
import LeftBarOpenedReducer from './panel/leftbar/opened';
import LeftBarEnabledReducer from './panel/leftbar/enabled';
import RightBarOpenedReducer from './panel/rightbar/opened';
import RightBarEnabledReducer from './panel/rightbar/enabled';

/* products */
import MealTypesReducer from './products/mealtypes';

const rootReducer = combineReducers({
  /* panel */
  menu: MenuReducer,
  header_opened: HeaderOpenedReducer,
  leftbar_opened: LeftBarOpenedReducer,
  leftbar_enabled: LeftBarEnabledReducer,
  rightbar_opened: RightBarOpenedReducer,
  rightbar_enabled: RightBarEnabledReducer,

  /* products */
  mealTypes: MealTypesReducer
});

export default rootReducer;
