import { useRef, useState } from 'react'
import './contact.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
const variants ={
    initial:{
        y:0,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duaration:0.5,
            // staggerChildren:0.1,
        }
    }
}

export const Contact = () => {

    const ref = useRef();
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_big50yl', 'template_fzcjdyg', ref.current, 'TLZP-L47PlkU-Ag6P')
          .then((result) => {
             setSuccess(true);
          }, (error) => {
              setError(true);
          });
      };

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">

        <motion.div className='textContainer' variants={variants}>
            <motion.h1 variants={variants}> Lets work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>ashok.sakshi21@vit.edu</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>ashok.sakshi21@vit.edu</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>8626047016</span>
            </motion.div>
        </motion.div>

        <motion.div className='formContainer'>
        
            <form ref={ref} onSubmit={sendEmail}>
                <input type="text" required placeholder='Name' name="name"/>
                <input type="email" required  placeholder='Email' name="email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
                {error && "Error"}
                {success && "Sucess"}
            </form>
        </motion.div>
    </motion.div>
  )
}
