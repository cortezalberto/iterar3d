import { Canvas} from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Model";

// componenente para renderizar three.js
// que adentro renderizo el modelo
const Experience = () => {
  return (
    <>
      <Canvas camera={{ position: [-0.7, 0, -1] }}> {/* -4 */}
        <OrbitControls updateDefaultCamera={true} enableZoom={false} />

        {/* Lighting */}
        <directionalLight position={[0, 5, 3]} intensity={5} />
        <pointLight color={"purple"} intensity={0.5}></pointLight>
        <pointLight color={"green"} intensity={1.2}></pointLight>
        {/* 3D MODEL */}   
        <Suspense fallback={null}> 
{/* envolver el modelo con map pasar rl json como parametro prop
   models será el Array  
 function iterateModels(models, props) {
  return (
    <div>
      {models.map((model, index) => {
        return (
          <Model key={index} {...props} {...model} />
        );
      })}
    </div>
  );
}*/}  
 
     <Model/>

        </Suspense>

        
      </Canvas>
    </>
  );
};

export default Experience;
