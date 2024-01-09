import "./slide.css";
import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import CanvasWatch from "./CanvasWatch";
import watches from "./assets/watches";

const containerVariants1 = {
  hidden: {},
  visible: {
    transition: {
        delayChildren:4.5,
      staggerChildren: 0.3,
      
    },
  },
};

const containerVariants2 = {
    hidden: {},
    visible: {
      transition: {
          delayChildren:5,
        staggerChildren: 0.3,
        
      },
    },
  };

  const containerVariants3 = {
    hidden: {opacity:0},
    visible: {
        opacity:1,
      transition: {
         delay:6,
        ease:[0.165, 0.84, 0.44, 1],
        duration:2,
      },
    },
  };

const variantsChildren = {
  hidden: {
    y: "150%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};

const tapChildren = {
  hidden: {},
  animate: {
    y:["150%","0"],
    transition: {
      duration:1,
      staggerChildren: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};


export default function Slide() {
  const [sliderState, setSliderState] = useState(0);

  const changeClassAnimation =(newSlide) => {
    const elements = document.querySelectorAll('.cta-container h2, .cta-container h3, .group-info, .watch-3d-container');
    const bulletsSlide = document.querySelectorAll('.slide-circle');

    bulletsSlide.forEach((bullet, index)=> {
      bullet.classList.remove("selected-circle")
      let bulletIndex = Array.from(bullet.parentNode.children).indexOf(bullet);
      if(bulletIndex === sliderState){
        console.log(bulletIndex)
        console.log(sliderState)
        bullet.classList.add("selected-circle")
      }
    })


    elements.forEach((element, index)=>{
      setTimeout(() => {
        element.classList.add("animate")
      }, 150 * index)
      
    })
    setTimeout (() => {
      setSliderState(newSlide)
    }
      , 1000)
      setTimeout (() => {
        elements.forEach((element)=>{
          element.classList.remove("animate")
        })
      }
        , 3000)
  }

  

  const backSlide = () => { 
    const newSlide = sliderState === 0 ? watches.length - 1 : sliderState - 1;
    changeClassAnimation(newSlide)
  };
  
  const nextSlide = () => {
    const newSlide = sliderState === watches.length - 1 ? 0 : sliderState + 1;
    changeClassAnimation(newSlide)
  };



  return (
    <div className="slider-container">
      <motion.div
        className="cta-container"
        variants={containerVariants1}
        initial="hidden"
        animate="visible"
      >
        <div className="overflow-container">
          <motion.h2 variants={variantsChildren}>
            {watches[sliderState].heading}
          </motion.h2>
        </div>
        <div className="overflow-container font-display">
          <motion.h3  variants={variantsChildren}>
          {watches[sliderState].subheading}
          </motion.h3>
        </div>
        <div className="overflow-container">
          <Button  variant={variantsChildren} />
        </div>
      </motion.div>
      <motion.div 
      className="watch-slider-container"
      variants={containerVariants3}
        initial="hidden"
        animate="visible"
      >
        <div className="slider-controls">
          <div className="arrow-group">
            <motion.img  onClick={backSlide} src="/arrow.png" alt="" className="arrow-top" />
            <motion.img  onClick={nextSlide}  src="/arrow.png" alt="" className="arrow-bot" />
          </div>
          <div className="numbers">
             <div className="slide-circle selected-circle"></div>
             <div className="slide-circle"></div>
             <div className="slide-circle"></div>
          </div>
        </div>
        <div className="watch-3d-container">
         <CanvasWatch url={watches[sliderState].url}/>           
        </div>
      </motion.div>
      <motion.div className="info-tech-container"
      variants={containerVariants2}
      initial="hidden"
      animate="visible"
      >
        <div className="group-tech">
          <div className="overflow-container">
            <motion.div variants={variantsChildren} className="group-info">
              <h3>mouvement</h3>
              <ul>
                <li>Calibre B01</li>
                <li>Power reserve of approx. 40 hours</li>
                <li>Balance frequency of 21,600 BPH/3HZ</li>
                <li> 51 jewels and 228 components in the movement only</li>
                <li>Diameter: 35mm/15.5 lines</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="group-tech">
          <div className="overflow-container">
            <motion.div variants={variantsChildren} className="group-info">
              <h3>case</h3>
              <ul>
                <li>Calibre B01</li>
                <li>Power reserve of approx. 40 hours</li>
                <li>Balance frequency of 21,600 BPH/3HZ</li>
                <li> 51 jewels and 228 components in the movement only</li>
                <li>Diameter: 35mm/15.5 lines</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="group-tech">
          <div className="overflow-container">
            <motion.div variants={variantsChildren} className="group-info">
              <h3>Buckle</h3>
              <ul>
                <li>Calibre B01</li>
                <li>Power reserve of approx. 40 hours</li>
                <li>Balance frequency of 21,600 BPH/3HZ</li>
                <li> 51 jewels and 228 components in the movement only</li>
                <li>Diameter: 35mm/15.5 lines</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
