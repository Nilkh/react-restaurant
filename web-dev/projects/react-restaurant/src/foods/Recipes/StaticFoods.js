import recipeArr from "../Data";
import RecipesContainer from "./RecipesContainer";
import IngredientsCards from "./IngredientsCards";
import { useState } from "react";
import {
	getUniqueIngredients,
	getActiveRecipes,
	getUpdateActiveIngredients,
	getDisCartedIngredients,
} from '../../utils'

function StaticFoods(){
	const [activeIngredients, setActiveIngredients] = useState(getUniqueIngredients(recipeArr))
	const [disCartedIngredients ,setDisCartedIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState(recipeArr)


    function removeIngredients(event) {
		const item = event.target.value
		const updatedActiveIngredients = getUpdateActiveIngredients(item, activeIngredients)
		const updateActiveMeals = getActiveRecipes(updatedActiveIngredients,recipeArr)

	    setActiveIngredients(prev =>{
		  return prev.filter(el => {
			 if(el === item){
				return false;
			 }else{
				return true;
			  }
		   })
		})
	   
	   setDisCartedIngredients(prev =>{
		    return [...prev, item]
	   })
		setActiveIngredients(updatedActiveIngredients)
	    setActiveMeals(updateActiveMeals)
		 
	}


    function addIngredients(event) {
		const item = event.target.value
        const updatedDisCartedIngredients = getDisCartedIngredients(activeIngredients,item)
		const updateActiveMeals = getActiveRecipes(updatedDisCartedIngredients,recipeArr)

		setDisCartedIngredients((prev) =>{
			return prev.filter((el) => {
				if (el === item) {
					return false
				} else {
					return true
				}
			})
		})
		setActiveIngredients(updatedDisCartedIngredients)
		setActiveMeals(updateActiveMeals)
		
	}
     
	
     
    

	return (
			<div>
				<div>
					{/* <h4>{activeIngredients}</h4> */}

					{/* {getUniqueIngredients.ingredients.map((item, index) => {
						return (
							<div key={index}>
								<Ingredient ingredient={item} />
							</div>
						)
					})} */}
				</div>

				<IngredientsCards
					ingredients={activeIngredients}
					removeIngredients={removeIngredients}
				
					disCartedIngredients={disCartedIngredients}
					addIngredients={addIngredients}
				/>

				<RecipesContainer recipesData={activeMeals} />
			</div>
		)
}


export default StaticFoods;






			
   