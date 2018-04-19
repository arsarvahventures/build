import React from "react";

export default function(props){
	return(
		<div>
			<h1>Cataglog Page</h1>
			{
				props.prds.products.map(prd => {
					return(
						<p key={prd.id}>{prd.name}</p>
					);
				})
			}
		</div>
	);
}