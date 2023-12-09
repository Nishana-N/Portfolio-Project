import React from 'react';
import{ Link, Outlet } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>

    <nav className="navbar">
        <img src="logo.jpeg" alt='Logo' className='logo'/>
        <div >
          <ul style={{display:"flex", gap:"10px", listStyleType:"none" }} className='desktopMenu'>
          <li className='desktopMenuListItem'><Link to="/Intro">Home</Link></li>
            <li className='desktopMenuListItem'><Link to="/Skills">About</Link></li>
            <li className='desktopMenuListItem'><Link to ="/Works">Portfolio</Link></li>
            <li className='desktopMenuListItem'><Link to ="/Clients">Clients</Link></li>
            
            
          </ul>
        
           
          
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:"smooth"});
        }}>Contact Me</button>
        
       
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar