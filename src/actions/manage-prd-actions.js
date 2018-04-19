import * as types from './actions-types';

export function getManagePrds(prds){
	console.log(prds);
	return {
		type: types.GET_MANAGE_PRODUCTS,
		prds
	};
}