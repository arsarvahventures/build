import axios from 'axios';
import store from '../store';

import { getAllCategory } from '../actions/allcategory-actions';


/*Get all Categories and Subcategories*/
export function getCategories(){
	return axios.get('https://api.buildonn.com/v1/catalog/categories?view=summary&productType=NO')
	 .then(response => {	    
	 	store.dispatch(getAllCategory(response.data));
	 	return response;
	 });
}