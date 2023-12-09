import React from 'react'
import './works.css'

const Works = () => {
  return (
    <section id="works">
           <h2 className='worksTitle'>My Portfolio</h2>
           <span className="workDesc">I take in paying attention to the smallest details and making sure that my work is pixel project. I am excited to bring my skills and experience to help buisinesses achieve their goals and create a strong online presence.</span>
           <div className="worksImgs">
            <img src='portfolio1.jpeg' alt='portfolio1' className='worksImg'/>
            <img src='portfolio8.jpeg' alt='portfolio8' className='worksImg'/>
            <img src='portfolio9.jpeg' alt='portfolio9' className='worksImg'/>
            <img src='portfolio4.jpeg' alt='portfolio4' className='worksImg'/>
            <img src='portfolio5.jpeg' alt='portfolio5' className='worksImg'/>
            <img src='portfolio3.jpeg' alt='portfolio3' className='worksImg'/>
           </div>

           <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works