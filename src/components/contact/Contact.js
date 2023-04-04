import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [showContactForm, setShowContactForm] = useState(false);

    const form = useRef();

    const toggleClick = () => {
        setShowContactForm(!showContactForm);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i5y0t9o', 'template_fnl7odc', form.current, 'S2iuW3trdarfcK_1v')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id='contact'>
            <button className='contact-btn' onClick={()=> {toggleClick()}}>Let's Get in Touch</button>
            {showContactForm &&
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <div className='form-section'>
                        * Required Field
                    </div>
                    <div className='form-section flex'>
                        <label htmlFor='user_name'>Name *</label>
                        <input type='text' id='user_name' name='user_name' required />
                    </div>
                    <div className='form-section flex'>
                        <label htmlFor='user_email'>Email</label>
                        <input type='email' id='user_email' name='user_email'/>
                    </div>
                    <div className='form-section flex'>
                        <label htmlFor='message'>Message *</label>
                        <textarea id='message' name='message' required />
                    </div>
                    <div className='form-section'>
                        <button className='submit-btn' type='submit'>Submit</button>
                    </div>
                </form>
            }
        </section>
    )
}

export default Contact;