import Atropos from "atropos/."
export default function header(){
    
    return (
		<>
			<Atropos>
					{/* 
              Element with negative offset will move in reverse direction,
              making it appear behind the scene
             */}
					<img src='image-bg.png' data-atropos-offset='-5' />
					{/* 
              Element with no offset will not move
              */}
					<img src='image-middle.png' data-atropos-offset='0' />
					{/* 
                Element with positive offset will move in same direction,
                making it appear in front of the scene
                */}
					<img src='image-front.png' data-atropos-offset='5' />
			</Atropos>
		</>
	)
}