import { motion ,useInView} from 'framer-motion'
import  './services.scss'
import { useRef } from 'react'
const variants =  {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
         transition:{
            duration:1,
            staggerChildren:0.1,
         }


    }
}
const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial ="initial" 
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
        <motion.div className='textContainer' variants={variants}>
            <p> i am fosucing on getting a job 
            <br/> developer</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className='title'>
                <img src="./people.webp" alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b>  Ideas</h1>
            </div>

            <div className='title'>
                 <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b>  buisness</h1>
                 <button>
                    WHAT WE DO?
                 </button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>

            <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    wshxnsnn
                </p>
                <button>hi</button>
            </motion.div>
            <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    wshxnsnn
                </p>
                <button>hi</button>
            </motion.div>
            <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    wshxnsnn
                </p>
                <button>hi</button>
            </motion.div>
            <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    wshxnsnn
                </p>
                <button>hi</button>
            </motion.div>
        </motion.div>
   
    </motion.div>
  )
}

export default Services