import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Header and Footer
import HeaderContainer from './components/containers/header-container';

//Pages
import Home from './components/home';
import ManagePrdContainer from './components/containers/manage-prd-container';
import CatalogPrdsContainer from './components/containers/catalog-container';


export default(
	<Router>
		<div>
			<HeaderContainer />		
			<Switch>					
				<Route exact path="/" component={Home} />	
				<Route path="/manage-prds" component={ManagePrdContainer} />
				<Route path="/:category" component={CatalogPrdsContainer} />
			</Switch>
			
		</div>
	</Router>
);