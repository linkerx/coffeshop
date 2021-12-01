import { combineReducers } from 'redux';

/* system */
import UserAuthenticatedReducer from './user/authenticated';

/* products */
import MealTypesReducer from './products/mealtypes';
import ProductsReducer from './products/products';
import CombosReducer from './products/combos';

/* order */
import OrderReducer from './order/order';

const rootReducer = combineReducers({

  /* system */
  user: UserAuthenticatedReducer,

  /* products */
  mealTypes: MealTypesReducer,
  products: ProductsReducer,
  combos: CombosReducer,
  order: OrderReducer,
});

export default rootReducer;
