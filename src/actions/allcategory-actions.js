import * as types from './actions-types';

export function getAllCategory(categories){	
	return{
		type: types.GET_CATEGORIES,
		categories
	};
}