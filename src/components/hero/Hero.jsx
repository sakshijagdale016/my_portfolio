import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'
const textVariants = {
    initial: {
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
     duration:1,
     staggerChildren : 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }


}


const sliderVariants = {
    initial: {
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
     duration:20,
     
        }
    },
   
    

}

const Hero = () => {
  return (
    <div className='hero'>
    <div className='wrapper'>
    <motion.div className='textContainer' variants={textVariants}
    initial="initial" animate="animate">
        <motion.h2  variants={textVariants}>SAKSHI jAGDALE</motion.h2>
        <motion.h1  variants={textVariants}> Web developer</motion.h1>
       <motion.div   variants={textVariants} className='buttons'>
        <motion.button  variants={textVariants}>See the latest work</motion.button>
        <motion.button className='btn' variants={textVariants} href="#contact">Contact Me</motion.button>
       </motion.div>
<motion.img src="./scroll.png"  variants={textVariants} animate="scrollButton"/>
    </motion.div>
 <motion.div className='slidingTextContainer' initial="initial" animate="animate" variants={sliderVariants}>
 web developer 

 </motion.div>

    <div className='imageContainer'>

        <img src="/hero.png" alt = "hero image"/>
    </div>
    </div>
    </div>
  )
}

export default Hero