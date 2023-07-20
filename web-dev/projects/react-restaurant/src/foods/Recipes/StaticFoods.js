import recipeArr from "../Data";
import RecipesContainer from "./RecipesContainer";
import IngredientsCards from "./IngredientsCards";
import { useState } from "react";
import {getUniqueIngredients ,getActiveRecipes} from '../../utils'

function StaticFoods(){
	const [activeIngredients, setActiveIngredients] = useState(
		getUniqueIngredients(recipeArr)
	)
	const [disCartedIngredients ,setDisCartedIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState(recipeArr)

    function removeIngredients(event) {
		const updateActiveMeals = getActiveRecipes(activeIngredients,recipeArr)
		// console.log(updateActiveMeals)
	  const item = event.target.value
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
		
	   setActiveMeals(updateActiveMeals)
		
	}


    function addIngredients(event) {
		const updateActiveMeals = getActiveRecipes(activeIngredients, recipeArr)
		const item = event.target.value

		 setActiveIngredients((prev) => {
				return [...prev, item]
			})

		setDisCartedIngredients((prev) =>{
			return prev.filter((el) => {
				if (el === item) {
					return false
				} else {
					return true
				}
			})
		})
		   setActiveMeals(updateActiveMeals)
		
	}
     
	// function getUpdateActiveMeals(even){
	// 	const item =even.target.value

	// 	 setActiveIngredients((prev) => {
	// 			return [...prev, item]
	// 		})

	// 		setActiveMeals((prev) => {
	// 			return prev.filter((el) => {
	// 				if (el === item) {
	// 					return false
	// 				} else {
	// 					return true
	// 				}
	// 			})
	// 		})


	// 		setDisCartedIngredients((prev) => {
	// 			return prev.filter((el) => {
	// 				if (el === item) {
	// 					return false
	// 				} else {
	// 					return true
	// 				}
	// 			})
	// 		})
	// }
     
    

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

					// activeMeals={activeMeals}
					// getUpdateActiveMeals={getUpdateActiveMeals}
				/>

				<RecipesContainer recipesData={activeMeals} />
			</div>
		)
}


export default StaticFoods;






			
   