import React from 'react'

function Food3(props) {
	return (
		<div>
			<h3>{props.Food}</h3>
			<ul>
				<li>
					{props.Food}
					<li>rice</li>
					<li>broth</li>
					<li>butter</li>
					<li>wine</li>
					<li>parmagiano-reggiano</li>
				</li>
			</ul>
		</div>
	)
}
export default Food3
