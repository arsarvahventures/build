import * as types from '../actions/actions-types';
import _ from 'lodash';

const initialState = {
	categories: []
};

const categoryReducer = function(state = initialState, action){	
	switch(action.type){
		case types.GET_CATEGORIES:
			const newCategories = _.filter(action.categories, cate => cate.categoryHaveProducts);			
			newCategories.map((cat,i) => {
				cat.catURL = cat.catName.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase().replace(/  +/g, ' ').split(' ').join('-');
				cat.subCategories = _.filter(cat.subCategories, subcat => (subcat.subCatname !== 'Water Tanks' && subcat.subCatname !== 'Pumps' && subcat.subCatname !== 'Accessories' && subcat.subCatname !== 'Pipes and Fittings' && subcat.subCatname !== 'Neutech'))
				cat.subCategories.map((subcat,i) => {					
					subcat.subcatURL = subcat.subCatname.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase().replace(/  +/g, ' ').split(' ').join('-');
				});
			});			
			return Object.assign({}, state, {categories: newCategories});

		default:
			return state;
	}
}

export default categoryReducer;