export default function Categories({ product }) {
	return (
	    <>
		   <h2>Hello</h2>

			{Object.values(product).map((item) => {
			    return <div key={item}>{item}</div>
			})}
		</>
		
	)
}