import React ,{useState ,useEffect} from "react";
import {postCategories}  from './api'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Categories from "./Categories";




function Index(){
 const [product , setProduct] = useState({})

    useEffect(() =>{
        postCategories().then((data) => {
					// console.log(data)
					const productArr = data.map((item) => {
						console.log(item.name)
						return item.name
					})

					setProduct(productArr)
				})

    }, [])

    return (
        <>
			<Container>
				<Card>
					<Categories product={product}
                     />
				</Card>
			</Container>
        </>   
	)
}
export default Index;