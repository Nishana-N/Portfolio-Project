import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
           <span className='skillTitle'>What i do</span>
           <span className='skillDesc'>Iam a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of desighn and a keen eye for detail. Im proficient in HTML,CSS and javaScript </span>
            <div className="skillBars">
                <div className='skillBar'>
                    <img src='skill.jpeg' alt='UiDesighn' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX DEsign</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src='skill1.png' alt='WebDesighn ' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>

                </div>
            </div>

    </section>
  )
}

export default Skills