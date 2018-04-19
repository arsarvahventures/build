import React from "react";

export default function(props){	
	
	return(
		<div>
			<h1>Manage Products</h1>				
			{
				props.prds.products.map(prd => {
					return(
						<p key={prd.productId}>{prd.name}</p>						
					);
				})
			}				
		</div>
	);
}