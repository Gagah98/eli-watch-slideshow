import './App.css';
import Navbar from './Navbar';
import Slide from './Slide';
import StaggerText from './StaggerText';
import {motion} from "framer-motion"
 

function MainApp() {

  const variants = {
    hidden:{
        translate:"-50% -50%",
        scale:1,
    },
    visible:{
      translate: [null, null,"-50% -150%"],
        scale:[null, 0.6, null],
        transition:{
          times: [0, 0.5, 1],
          duration:4,
            delay:2,
            ease:[0.165, 0.84, 0.44, 1],
            type:"tween"
        }
    }
}



  return (
    <div className="wrapper">
       <Navbar />
       <div className="gradient-container"></div>
       <div className="main">
        <motion.div 
        className="loader-container"
        variants={variants}
        initial="hidden"
        animate="visible"
        >
          <StaggerText text="Upside Down" class="big-font"/>
        </motion.div>
        <div className="section-slider">
       <Slide />
        </div>
        
       </div>
      
    </div>
  );
}

export default MainApp;
