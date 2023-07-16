import React from "react";
import Recipes from "./Recipes";
// import Ingredient from "./Ingredient";
// import  Container  from "react-bootstrap/Container";
function RecipesContainer(props){
    return (
		<div>
				
            {props.RecipesData.map(item => {
				return (
					<div>
						<Recipes Recipes={item.recipe} 
						 ingredients={item.ingredients} 
						key={`recipe-Arr-${item.recipe}`}/>
					</div>
				)
			})}
				
		</div>
	)
}

export default RecipesContainer

  
