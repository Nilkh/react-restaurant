import React from "react";
import Ingredient from "./Ingredient";
function Recipe(props){
    return (
			<div>
				<h4>{props.recipe}</h4>

				{props.ingredients.map((ingredient, i) => {
					return <Ingredient key={i} ingredient={ingredient} />
				})}
			</div>
		)
}
export default Recipe