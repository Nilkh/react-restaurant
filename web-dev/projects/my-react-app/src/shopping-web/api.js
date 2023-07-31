import axios from "axios"
function postCategories() {
	axios
		.post('https://api.escuelajs.co/api/v1/categories/', {
			name: 'bracelet',
			image:
				'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTj_o8tWOoMRm7Cs2jiKKWHR070UpZH627vPP_ISF61ITuzjkHXMmnEcG4HWh1KVN_iEGGds6AN0x2B1w2YxASRXyd5FPEbaR2m88k7bJHjKaU1X725LHnU9Vo',
			description: '',
			price: '$350',
		})
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
		// console.log(axios.post)
}
module.exports = postCategories
   
