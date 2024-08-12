import { combineReducers, createStore ,applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";
const rootReducer=combineReducers({
    restaurants:restaurantReducer,
    products:productReducer,
    cart:basketReducer,
});
//applymiddleware ara yazılımı reduxa dahil eder.
export default createStore(rootReducer,applyMiddleware(thunk));