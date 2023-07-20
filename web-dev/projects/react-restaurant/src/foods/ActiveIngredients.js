import React from "react";

 export default function ActiveIngredients(props){
    return (
			<div>
				<h4>Active Ingredients</h4>
				
					{props.ingredients.map((item) => {
						return (
							<div key={item}>
								{item}
								<button value={item} onClick={props.removeIngredients}>-</button>
							</div>
						)
					})}
				
			</div>
		)
}

//1. Change ActiveIngredients component so it’s not an UL with LI, but rather div with button
//2. Create function to remove ingredients and pass it to ingredient buttons using props