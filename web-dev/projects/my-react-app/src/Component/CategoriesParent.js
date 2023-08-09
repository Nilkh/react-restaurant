import AllCategories from "./AllCategories"
import { getCategories } from "./api"
import React, {useState,useEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Categories() {

    const [category, setCategory] = useState({})
	useEffect(() => {
		getCategories().then((data) => {
				// console.log(data)
            //   const productObj = data.map((item) => {
			// 	return item

			//  })
            setCategory(data)
		})
	}, [])

	return (
		<Container>
			<Row>
			     {Object.values(category).map((item) => {
				return <AllCategories category={item} key={item}></AllCategories>
			   })}
		   </Row>
		</Container>
	)
}
