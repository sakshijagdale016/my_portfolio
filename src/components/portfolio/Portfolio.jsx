import { useRef } from 'react'
import  './portfolio.scss'
import {motion , useScroll ,useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id:1,
        title:"React commerce",
        img:"https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order."
        },
        {
            id:2,
            title:"React commerce",
            img:"https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc:"Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order."
            },
            {
                id:3,
                title:"React commerce",
                img:"https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc:"Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order."
                },
                {
                    id:4,
                    title:"React commerce",
                    img:"https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=400",
                    desc:"Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order."
                    },


]

const Single = ({item})=>{
    const ref = useRef(); 
    const {scrollYProgress} = useScroll({
        target:ref ,
        // offset:["start start", "end start"]
    });
    const y = useTransform(scrollYProgress,
        [0,1],[-300,300]);
    return(
<section >
        <div  className="container">
        <div className='wrapper'>
        <div className='imageContainer' ref={ref}>
        <img src={item.img} alt=""/>
         </div>
          
         <motion.div className='textContainer' style={{y}}  >
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
             <button>See Demo</button>
          </motion.div>
          </div>
        </div>  
</section>
    )
}
const Portfolio = () => {
     const ref = useRef();
     const {scrollYProgress} = useScroll({target:ref ,offset:["end end", "start start"]});

     const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        dumping:30,
     })
  return (
    <div className='portfolio' ref={ref}>
    <div className='progress'>
    <h1>My Projects</h1>
   {/* <motion.div style={{scaleX}} className='progressBar'></motion.div> */}
 </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio