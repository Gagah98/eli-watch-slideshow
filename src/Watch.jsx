import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import { Suspense } from "react";

import React, { useRef} from 'react';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from "@react-three/fiber";


 function Watch(props){
const watchRef = useRef();

    useFrame(() =>{
        let rotationY = watchRef.current.rotation.y;
        
        if(rotationY > 1){
            watchRef.current.rotation.y += 0.01;
        }
        console.log(rotationY)
    })
 
    function Scene(){
        const gtlf = useLoader(GLTFLoader, props.url)
        const clockRef = useRef()
        return <primitive ref={clockRef} object={gtlf.scene}  /> 
    }


    return(
        <PresentationControls 
speed={1.5} 
zoom={1}
polar={[-0.1, Math.PI / 4]}
>

<Stage >
    <mesh ref={watchRef} {...props} />
<Scene />
</Stage>

</PresentationControls>
    )

}



export default Watch;

