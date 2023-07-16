import React from "react";
import data from '../../src/foods/Data'
import PastaPomodoro from './Food2'

function FoodList(){
    return (
		<div>
		    {data.map((item, index) => {
		       return (
							<div key={index}>
								<PastaPomodoro food={item.food} />
							    
							</div>
						)
			})}
		</div>
	)
     
}
export default FoodList;