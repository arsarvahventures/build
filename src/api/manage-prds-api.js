import axios from 'axios';
import store from '../store';

import { getManagePrds } from '../actions/manage-prd-actions';

/*Get Manage Products*/
export function getManageProducts(qs){	
	return axios.get('https://api.buildonn.com/v1/catalog/products?view=AdminManageProduct&brand='+qs.brand+'&category='+qs.cat+'&page='+qs.page+'&s='+qs.search+'&size=20&status='+qs.status+'&subCategory='+qs.subcat)
		.then(response => {
			store.dispatch(getManagePrds(response.data));
			return response;
		});
}