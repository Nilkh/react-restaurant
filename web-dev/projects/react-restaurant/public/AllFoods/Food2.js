import React from 'react'
import foodArr from '../../src/foods/Data'
function Food2(props) {
	return (
		<div>
			<h3>{props.food}</h3>
			<ul>
				<li> pasta
					<li>tomato</li>
					<li>red chili</li>
					<li>garli</li>
					<li>olive oil</li>
					<li>basil</li>
					<foodArr foodArr={"props: foodArr"} />
				</li>
			</ul>
		</div>
	)
}
export default Food2
