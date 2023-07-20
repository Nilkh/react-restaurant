import React from "react";
import Recipes from "./Recipes";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
function RecipesContainer(props){
    return (
		<Container>
		<Row>
			<Col>
				{props.recipesData.map((item, i) => {
					return (
						<div key={`recipe-Arr-${i}`}>
							<Recipes
							    recipe={item.recipe}
								ingredients={item.ingredients}
							/>
						</div>
					)
				})}
			</Col>
		</Row>
		</Container>
	)
}
export default RecipesContainer;

  
