import * as types from '../actions/actions-types';
import _ from 'lodash';

const initialState = {
	items: {
		page: {},
		products: []
	}
};

const catalogPrdReducer = function(state = initialState, action){

	switch(action.type){
		case types.GET_CATALOG_PRODUCTS:
			return Object.assign({}, state, {items: action.items});
		default:
			return state;
	}
}

export default catalogPrdReducer;