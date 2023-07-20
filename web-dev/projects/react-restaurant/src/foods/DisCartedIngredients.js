import React from 'react'

export default function DisCartedIngredients(props) {
	return (
		<div>
			<h4>DisCarted Ingredients</h4>
			{props.disCartedIngredients.map((item) => {
				return (
					<div key={item}>
						{item}
						<button value={item} onClick={props.addIngredients}>+</button>
					</div>
				)
			})}
		</div>
	)
}
//1. Ensure the the button has the correct value
//2. Get the value from even inside handler function
//3. Remove item from active ingredients and set state
//4. Add item to discarded ingredients and set state