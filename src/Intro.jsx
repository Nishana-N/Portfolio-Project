import React from 'react'
import './intro.css';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Smith</span> <br/> Website Designer</span>
            <p className='introPara'> I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
            <p><button className='btn'>Hire Me</button></p>
        </div>
       
        <div >
        <img className="bg" src=" profile3.jpeg" alt="bg"/>

        </div>
    </section>
  )
}

export default Intro;