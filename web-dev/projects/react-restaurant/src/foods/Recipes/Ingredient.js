import React from "react";

function Ingredient(props){
     console.log(props.ingredient)
  
    return (
	    <div>
			{props.ingredient.map(item  => {
				return (
					<div key={`ingredient-${item}`}>{item}</div>
				)
			})}
		</div>
	)
        
 
}

export default Ingredient;