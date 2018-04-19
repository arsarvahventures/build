import React, { Component } from "react";
import { connect } from 'react-redux';
import Header from '../views/header-view';
import * as allCatAPI from '../../api/category-api';

class HeaderContainer extends Component{
	constructor(props){
		super(props);
		this.showNavigation = this.showNavigation.bind(this);
		this.hideNavigation = this.hideNavigation.bind(this);
		this.state = {
			isOpen : false
		}
	}
	componentDidMount(){
		allCatAPI.getCategories();		
	}

	hideNavigation(e){
		//e.preventDefault();
		this.setState({isOpen: false});
	}

	showNavigation(e){
		e.preventDefault();
		this.setState({isOpen: !this.state.isOpen});
	}

	render(){
		return(
			<Header categories={this.props.categories} isOpen={this.state.isOpen} showCategories={this.showNavigation} hideCategories={this.hideNavigation}/>
		);
	}
};

const mapStateToProps = function(store) {
	return {
		categories : store.categoryState.categories
	};
};

export default connect(mapStateToProps)(HeaderContainer);