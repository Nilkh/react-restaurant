import React from "react"
import ActiveIngredients from "../ActiveIngredients"
import DisCartedIngredients from "../DisCartedIngredients"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
function IngredientsCards(props){
    return (
			<Container>
				<Row>
					<Col>
						<ActiveIngredients
							ingredients={props.ingredients}
							removeIngredients={props.removeIngredients}
						/>
					</Col>
					<Col>
						<DisCartedIngredients
							disCartedIngredients={props.disCartedIngredients}
							addIngredients={props.addIngredients}
						/>
					</Col>
				</Row>
			</Container>
		)
}
export default IngredientsCards;
