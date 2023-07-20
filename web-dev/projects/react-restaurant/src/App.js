import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import './App.css';
import StaticFoods from './foods/Recipes/StaticFoods';
// import InStock from './hooks/InStock';


function App() {
  return (
		<div>
			{/* <InStock /> */}
			<StaticFoods />
		</div>
	)
}

export default App;
