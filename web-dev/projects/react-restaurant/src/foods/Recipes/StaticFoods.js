import React from "react";
import recipeArr from "../Data";
import RecipesContainer from "./RecipesContainer";
import IngredientsCards from "./IngredientsCards";
import Ingredient from "./Ingredient";

function StaticFoods(){
//  const get

   

	console.log(getUniqueIngredients(recipeArr))	
    return (
	 <div>
			
		    <h3>Ingredient:</h3>
				<Ingredient ingredient={getUniqueIngredients(recipeArr)}/>
				<RecipesContainer RecipesData={(recipeArr)} />
		</div>
	)
     
}

  function getUniqueIngredients(recipeArr){
	return recipeArr.reduce((prev , curr) => {
		curr.ingredients.forEach(item=> {
			if(!prev.includes(item)) {
				prev.push(item);
			}
			
		});
		return prev ;
	},[]);
  }
export default StaticFoods;