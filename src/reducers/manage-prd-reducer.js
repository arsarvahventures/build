import * as types from '../actions/actions-types';

const initialState = {
	prds: {
		page: {},
		products: []
	}
};

const managePrdReducer = function(state = initialState, action) {
	
	switch(action.type){
		case types.GET_MANAGE_PRODUCTS:
			console.log(action);
			return Object.assign({}, state, {prds: action.prds});

		default: 
			return state;
	}
}

export default managePrdReducer;