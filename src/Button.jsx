import { useState } from "react";
import {motion} from "framer-motion"
import './button.css';



function Button(props){

    const [isHovered, setHovered] = useState(false)

    const variantsTextTop = {
        hidden:{
            y:"-100%",

        },
        show:{
            y:"0",
            transition:{
                duration:0.6,
                delay:0.1,
                ease:"easeOut"
            }
        }
    }

    const variantsTextBottom = {
        hidden:{
            y:"0",

        },
        show:{
            y:"100%",
            transition:{
                duration:0.6,
                delay:0.1,
                ease:"easeOut"
            }
        }
    }

    const variantsBgColor = {
        hidden:{
            y:"-100%",

        },
        show:{
            y:"0%",
            transition:{
                duration:0.6,
                ease:"easeOut"
            }
        }
    }

    return(
        <motion.div variants={props.variant} className="button-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        <motion.div className="button-bg-fill"
        variants={variantsBgColor}
        initial="hidden"
        animate={isHovered ? "show" : "hidden"}
        ></motion.div>
        <div className="overflow-button-container">
            <motion.p className="button-text text-top"
            variants={variantsTextTop}
            initial="hidden"
            animate={isHovered ? "show" : "hidden"}
            >Add to Cart</motion.p>
            <motion.p className="button-text text-bottom"
            variants={variantsTextBottom}
            initial="hidden"
            animate={isHovered ? "show" : "hidden"}
            >Add to Cart</motion.p>
        </div>
    </motion.div>
    )
   
}

export default Button;