import React from "react";
import Ingredients from "./Ingredient";
function Recipe(props){
    return (
			<div>
				<h3>{props.recipe}</h3>

				{props.ingredients.map(ingredients => {
					return <Ingredients ingredients={ingredients} />
						
					
				})}
			</div>
		)
}
export default Recipe