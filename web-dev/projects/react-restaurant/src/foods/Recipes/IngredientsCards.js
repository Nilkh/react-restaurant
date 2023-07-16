import React from "react"
import recipeArr from "../Data"
import Ingredients from "./Ingredient"

function IngredientsCards(){
    // console.log(IngredientsCards)
 
    return(
      
        <div>
            {recipeArr.map((item,index) => {
                return (
					<div key={index}>
									
						<Ingredients ingredients={item.ingredients} />
											
										
					</div>
				)
            })}
        </div>
    )
}
export default IngredientsCards;
