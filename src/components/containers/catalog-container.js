import React, { Component } from "react";
import { connect } from 'react-redux';
import CatalogPrds from '../views/catalog-view';
import * as catalogPrdsAPI from '../../api/catalog-prds-api';

class CatalogPrdsContainer extends Component{
	constructor(props){
		super(props);		
		this.state = {
			qs: {catName:'', subCatName:''}			
		}
		
	}	

	componentDidMount(){

		if(this.props.match.params.subcat !== '' && this.props.match.params.subcat !== undefined){
			
		}else if(this.props.match.params.category !== '' && this.props.match.params.category !== undefined){
			this.setState(prevState => { return { qs: {...prevState.qs, catName: 'name'} } });
			console.log(this.state.qs);
			catalogPrdsAPI.getCatalogProducts(this.state.qs);
		}else{

		}

	}

	render(){
		return(
			<CatalogPrds prds={this.props.items}/>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		items : store.catalogPrdState.items
	};
};

export default connect(mapStateToProps)(CatalogPrdsContainer);