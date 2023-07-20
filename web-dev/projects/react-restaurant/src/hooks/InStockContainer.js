// import { useState } from "react";
// import ItemList from "./List";
// import { inStockArr } from "./InStock";

// export default function InStockContainer(){
//     const [InStock , setInStock] = useState([])
//     const divStyle ={ backgroundColor: InStock}

//     const addItem =(item)  => {
//         setInStock(prevValue => [...prevValue , item]);
//     };
//     return <div style={divStyle}>
//         {InStock.map((item , index) => {
//             return(
//                 <li onClick={() => setInStock(item)} key={index}>{item}</li>
//             )
 
//         })}
//         <ItemList item={inStockArr} onItemClick={addItem}/>
        
//     </div> 
// }