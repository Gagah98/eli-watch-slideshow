import {motion} from "framer-motion"

export default function StaggerText(props){
    let globalIndex = 0;

  

    return(
        <motion.span 
        className={props.class}
        
        >
        {props.text.split(" ").map((word, index)=>{
            
            return   <motion.span className="textInline" key={index}>
               { index===1 && " " } 
                {word.split("").map((c, index) =>{
                   return <motion.span
                    key={globalIndex++}
                    initial={{ opacity: 0, y:100 }}
            animate={{ opacity: 1,y:0}}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: globalIndex * 0.2,
            }}
                    >{c}</motion.span>
                })}
            </motion.span>
        })}
         </motion.span>
    )
    
}