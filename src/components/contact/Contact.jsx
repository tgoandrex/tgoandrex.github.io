import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.png'

function Contact() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const form = useRef();

    const toggleClick = () => {
        setShowContactForm(!showContactForm);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i5y0t9o', 'template_fnl7odc', form.current, 'S2iuW3trdarfcK_1v')
        .then((result) => {
            if(result.status === 200) {
                setFormIsSubmitted(true);
                setUsername('');
                setEmail('');
                setMessage('');
            }
        },
        (error) => {
            console.log(error.text);
        });
    };

    if(formIsSubmitted) {

    }

    return (
        <section id='contact'>
            <div className={formIsSubmitted ? 'form-submit-message' : 'form-submit-message hide'}>
                Form successfully submitted!
                <span onClick={()=> {setFormIsSubmitted(false)}}>X</span>
            </div>
            <button className='contact-btn' onClick={()=> {toggleClick()}}>Let's Get in Touch</button>
            <form className={showContactForm ? 'contact-form' : 'contact-form hide'} ref={form} onSubmit={sendEmail}>
                <div className='form-section'>
                    * Required Field
                </div>
                <div className='form-section flex'>
                    <label htmlFor='user_name'>Name *</label>
                    <input 
                        type='text' id='user_name' name='user_name'
                        value={username} onChange={(e) => setUsername(e.target.value)} required 
                    />
                </div>
                <div className='form-section flex'>
                    <label htmlFor='user_email'>Email</label>
                    <input
                        type='email' id='user_email' name='user_email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-section flex'>
                    <label htmlFor='message'>Message *</label>
                    <textarea
                        id='message' name='message'
                        value={message} onChange={(e) => setMessage(e.target.value)} required
                    />
                </div>
                <div className='form-section'>
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
            <div className='contact-icons'>
                <a className='contact-icon' href='https://www.linkedin.com/in/andrew-stapleton-590309133/'>
                    <img src={linkedin} alt='Linkedin logo' />
                </a>
                <a className='contact-icon' href='https://github.com/tgoandrex'>
                    <img src={github} alt='Github logo' />
                </a>
            </div>
        </section>
    )
}

export default Contact;