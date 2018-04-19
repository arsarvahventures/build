import React from "react";
import { Link } from 'react-router-dom';

export default function(props){	
	
	return(
		<header>
			<nav>
				<Link to="/" onClick={props.hideCategories.bind(this)}>Home</Link>
				<a className="hLink" href="javascript:void(0)" onClick={props.showCategories.bind(this)}>Materials</a>
				{					
					<ul className={props.isOpen ? 'show' : ''}>
						{
							props.categories.map(cat => {
								return(
									<li key={cat.catId}>
										<Link to={cat.catURL} onClick={props.hideCategories.bind(this)}>
											{cat.catName}											
										</Link>
									</li>						
								);
							})
						}
					</ul>
				}
				<Link to="/manage-prds" onClick={props.hideCategories.bind(this)}>Manage Products</Link>
			</nav>	
		</header>
	);
}