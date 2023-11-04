import "./navbar.scss"
import React from 'react'
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
<Sidebar/>
        <div className="wrapper">
        <motion.span initial={{opacity:1,scale:1}} anitmate={{opacity:1,scale:2}} transition={{duration:1}} style={{ marginLeft: "100px" }}>Sakshi</motion.span>
        <div className="social">
        <a href="#"><img src="/facebook.png" alt=""></img></a>
        <a href="#"><img src="/instagram.png" alt=""></img></a>
        <a href="#"><img src="/youtube.png" alt=""></img></a>
        <a href="#"><img src="/dribbble.png" alt=""></img></a>
        </div>

        </div>
    </div>
  )
}

export default Navbar