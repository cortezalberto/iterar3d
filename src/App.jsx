

import Sliders from './Components/Sliders/Sliders'

import Sliders3D from './Components/Sliders/Sliders3D'
function App() {
  const arreglo3d = [
    {
      foto: 'https://picsum.photos/id/1020/400',
      edad: 24
    },
    {
      foto: 'https://picsum.photos/id/1025/400',
      edad: 30
    },
    {
     foto: 'https://picsum.photos/id/1010/400',
      edad: 24 
    },


  ]

  const modelosGBL= [
    
      {
        nombre3D: "PizzaRuculaAlpha.glb",
        archivo: "PizzaRuculaAlpha.glb",
        precarga: "/PizzaRuculaAlpha.glb",
        geometria: "pizza",
        material: "pizza",
      },
      {
        nombre3D: "PizzaRuculaAlpha.glb",
        archivo: "PizzaRuculaAlpha.glb",
        precarga: "/PizzaRuculaAlpha.glb",
        geometria: "pizza",
        material: "pizza",
      },
     

  ]



  return (
    <>
     estamos probando gbl
     {/*  <Sliders3D imagenes={modelosGBL} /> */}
      <Sliders imagenes={arreglo3d} />
    </>
  )
}

export default App
