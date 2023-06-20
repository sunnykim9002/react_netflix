import React, { useEffect, useState } from 'react';
import "./Nav.css";
export default function Nav() {

  const [show, setShow] = useState(false);

  
    useEffect(() => {
      window.addEventListener("scroll", ()=> {
        if(window.scrollY > 50) {
            setShow(true)
        }
        else {
            setShow(false)
        }
      })
    
      return () => {
        window.removeEventListener("scroll", () => {})
      }
    }, [])
    
 
  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt='netflix log'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            className="nav__logo"
            onClick={() => window.location.reload()}
        />
        <img
            alt="user logged"
            src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe?format=jpg&name=small"
            className='nav__avatar'
        />
    </nav>
  )
}
