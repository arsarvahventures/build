import * as types from './actions-types';

export function getCatalogPrds(items){
	return{
		type: types.GET_CATALOG_PRODUCTS,
		items
	};
}