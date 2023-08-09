function getCategories() {
	return fetch('https://api.escuelajs.co/api/v1/categories')
		.then((res) => {
			return res.json()
		})
		.then((res) => (res))
		.catch((error) => console.error(error))
    
}


function getProducts() {
	return fetch('https://api.escuelajs.co/api/v1/products')
		.then((res) => {
			return res.json()
		})
		.then((res) => res)
		.catch((error) => console.error(error))
}







// function postCategories() {
// 		return fetch('https://api.escuelajs.co/api/v1/categories', {
// 			method: 'post',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				name: 'Ring',
// 				image:
// 					'https://www.google.com/aclk?sa=l&ai=DChcSEwiy9uPz1rmAAxU3Bq0GHViIBnQYABAvGgJwdg&ase=2&sig=AOD64_2ySg1_LqdRR9Dsfsz7pyhm3DWUGA&ctype=5&nis=5&adurl&ved=2ahUKEwj64tbz1rmAAxU7DzQIHS9ZDIgQuxd6BQgBEMMD',
// 				description:
// 					'Le Vian Natural Garnet Ring 1/2 ct tw Diamonds 14K Strawberry Gold',
// 				price: '$2,199.99',
// 			}),
// 		})
// 			.then((res) => {
// 				return res.json()
// 			})
// 			.then((data) => data)
// 			.catch((error) => console.error(error))
//  }

   module.exports = {
			getCategories,
			getProducts
		}
