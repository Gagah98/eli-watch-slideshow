import {Canvas, useLoader} from "@react-three/fiber";
import './canvasWatch.css'
import {Suspense} from 'react';
import Watch from "./Watch";


import React, { useRef} from 'react';





import {motion} from "framer-motion"




  
function CanvasWatch(props){
 
  return (
    <motion.div className="container-watch-animation">
     
    <Canvas 
    dpr={[1,2]} 
  >
     <Suspense fallback={null}>
    <Watch url={props.url} />
    </Suspense>
  </Canvas>
 
  
   </motion.div>
  );

}
    
  
    export default CanvasWatch;