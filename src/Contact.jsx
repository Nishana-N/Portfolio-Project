import React,{useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
    
        emailjs.sendForm('service_tmd5xlq', 'template_839qaje', form.current, 'EVrGfYBnn_OG3ZO_i')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
            //   alert("Email sent!")
             alert(`Email sent! ,\n Name: ${userName} \n Email: ${userEmail}`);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">MyClient</h1>
            <p className="clientDesc">
               I have had the oppurtunity to work with a diverse group of companies.
               Some of the notable companies i have worked with includes 
            </p>
            <div className='clientimgs'>
                <img src="facebook1.jpeg" alt="Facebook" className="clientImg" />
                <img src="adobe1.png" alt="Adobe" className="clientImg" />
                <img src="Microsoft3.jpeg" alt="Microsoft" className="clientImg" />
                <img src="walmart.png" alt="Walmart" className="clientImg" />
            </div>

        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactdesc'>Please fill out the form below to discuss any work oppurtunities.</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name="your_name"/>
                <input type="email" className="email" placeholder='your email' name="your_email" />
                <textarea className='msg' name='message' rows="5" placeholder='your message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src="icons.png" alt="Icons" className="link" />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact