import { combineReducers } from 'redux';

//Reducers
import catalogPrdReducer from './catalog-prds-reducer';
import categoryReducer from './allcategory-reducer';
import managePrdReducer from './manage-prd-reducer';

//Combine Reducers
var reducers = combineReducers({
	catalogPrdState: catalogPrdReducer,
	categoryState: categoryReducer,
	managePrdState: managePrdReducer
});

export default reducers;