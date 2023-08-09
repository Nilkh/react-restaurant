import React ,{useState ,useEffect} from "react"
import Categories from "./CategoriesParent"






function Index({ category }) {
	

	
	return (
		<>
			<Categories category={category} />
			
		</>
	)
}
export default Index;


// function Home() {
// 	const [cartItems, setCartitems] = useState([])
// 	const [products, setProducts] = useState([])

// 	APIcallToGetProducts().then((data) => {
// 		setProducts(data)
// 	}, [])

// 	function AddProductToCart(event) {
// 		productToAdd = event.target.value
// 		setCartitems((prev) => {
// 			return [...prev, productToAdd]
// 		})
// 	}

// 	function removeProductFromCart(event) {
// 		productToRemove = event.target.value
// 		setCartitems((prev) => {
// 			return prev.filter((item) => {
// 				return item != productToRemove
// 			})
// 		})
// 	}

// 	return (
// 		<>
// 			<Cart cartItems={cartItems} handleRemoveProduct={removeProductFromCart} />
// 			<Products products={products} handleAddProdcut={AddProductToCart} />
// 		</>
// 	)
// }