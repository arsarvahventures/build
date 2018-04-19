import axios from 'axios';
import store from '../store';

import { getCatalogPrds } from '../actions/catalog-prd-actions';


/*Get Catalog Product*/
export function getCatalogProducts(data){
	return axios.get('https://api.buildonn.com/v1/catalog/products?category='+data.catName+'&subCategory='+data.subCatName+'&filter=true&isSubcategoryList=false')
	 .then(response => {
	 	store.dispatch(getCatalogPrds(response.data));
	 	return response;
	 });
}