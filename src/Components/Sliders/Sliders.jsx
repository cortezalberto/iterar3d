import{React} from 'react'
function Slider({ imagenes }) {
	
	return <div>
			
			{imagenes.map((imagen, index) => {
				return <img key={index} src={imagen.foto} alt="imagen" />
						})}
            </div>
					
        	
			}
			

export default Slider;