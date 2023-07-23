

export function getUniqueIngredients(recipeArr) {
	return recipeArr.reduce((prev, curr) => {
		curr.ingredients.forEach((item) => {
			if (!prev.includes(item)) {
				prev.push(item)
			}
		})
		return prev
	}, [])
}

export function getActiveRecipes(activeIngredients,recipeArr) {
	return recipeArr.filter((recipe) => {
		let keepRecipe = true
		recipe.ingredients.forEach((ingredient) => {
			if (!activeIngredients.includes(ingredient)) {
				keepRecipe = false
			}
		})
		// console.log(keepRecipe)
		return keepRecipe
	})
}


export function getUpdateActiveIngredients(item, activeIngredients) {
	return activeIngredients.filter((el) => {
		if (el === item) {
			return false
		} else {
			return true
		}
	})
}

export function getDisCartedIngredients(activeIngredients, item) {
	return [...activeIngredients, item]
}
    
