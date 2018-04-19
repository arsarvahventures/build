import React, { Component } from "react";
import { connect } from 'react-redux';
import ManagePrd from '../views/manage-prd-view';
import * as managePrdAPI from '../../api/manage-prds-api';

class ManagePrdContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			qs: {'brand':'','page':0,'search':'','cat':'','subcat':'','status':''}
		}

	}	

	componentDidMount(){				
		managePrdAPI.getManageProducts(this.state.qs);
		console.log(this.props);
	}

	render(){
		return(
			<ManagePrd prds={this.props.prds}/>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		prds : store.managePrdState.prds
	};
};

export default connect(mapStateToProps)(ManagePrdContainer);
