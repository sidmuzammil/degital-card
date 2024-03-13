import { Link } from "react-router-dom"
import "./Links.css"
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react"
import Togglebutton from "../components/Navbar/Togglebutton"
import { motion } from "framer-motion"


const Links = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },

    },
  }

  const [open, setOpen] = useState(false)
  const varients = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  return (
    <div className="Navlinks-container">
      <div className="desktop-screen">
        <ul>
          <li><Link to="smartcard">smartcard</Link></li>
          <li><Link to="/smartcard">deatures</Link></li>
          <li><Link to="/smartcard">blog</Link></li>
          <li><Link to="/smartcard">our Team</Link></li>
          <li><Link to="/smartcard">contactus</Link></li>
        </ul>
      </div>
      <div className="mobile-screen">
        <motion.div className="sidebar" animate={open ? "open" : "closed"} variants={varients}>
          {/* <ul >
            <li><Link to="/smartcard">smartcard</Link></li>
            <li><Link to="/smartcard">deatures</Link></li>
            <li><Link to="/smartcard">blog</Link></li>
            <li><Link to="/smartcard">our Team</Link></li>
            <li><Link to="/smartcard">contactus</Link></li>
            <button className="blue-button">Buy now</button>
          </ul> */}
          <Togglebutton setOpen={setOpen} />
        </motion.div>

        {/* <Hamburger right="0" onToggle={toggled => {
          if (toggled) {
            (
              
            )
          } else {
            { null }
          }
        }} /> */}


      </div>
    </div>
  )
}
export default Links

