import { useState } from "react";


 const inStockArr = [
		'Beef',
		'Goat',
		'Deer',
		'Chicken',
		'Ducks',
		'Rabbit',
		'Turkeys',
		'Sheep',
		'lamb',
		'Gote',
		'Garbanzo ',
		'Split Peas',
		'Black Beans',
		'Rice',
		'Vegetables',
		'Fruit',
 ]
export default function InStock(){
	const [value ,setValue] = useState('')
	const divStyle = { backgroundColor: 'Green' }

	return(
		<div>
			{inStockArr.map((item , index) => {
				return <button style={divStyle} onClick={() => setValue()}>{item}</button>
			})}
		</div>
	)
		
	
}