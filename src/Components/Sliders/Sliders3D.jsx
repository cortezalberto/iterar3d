import{React} from 'react'
import Experience from '../../Threejs/Experience';
function Sliders3D({ modelos3D }) {
	
	return <div>
			
			{modelos3D.map((imagen, index) => {
				return 
                
                
                <img key={index} src={imagen.foto} alt="imagen" />
						})}
            </div>
					
        	
			}
			

export default Sliders3D;