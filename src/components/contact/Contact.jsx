import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import './contact.css';

import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.png'

function Contact() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const form = useRef();

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

    return (
        <section id='contact'>
            <h3 className='contact-header'>Contact Me</h3>
            {formIsSubmitted &&
                <div className={'form-submit-message'}>
                    Form successfully submitted!
                    <span onClick={()=> {setFormIsSubmitted(false)}}>&times;</span>
                </div>
            }
            <motion.form
                className='contact-form'
                ref={form}
                onSubmit={sendEmail}
                initial={{ height: 0 }}
                animate={{ height: 279 }}
                transition={{ delay: 2 }}
            >
                <div className='form-flex'>
                    <motion.div
                        className='form-section'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        <input 
                            type='text' id='user_name' name='user_name' placeholder='Name'
                            value={username} onChange={(e) => setUsername(e.target.value)} required 
                        />
                    </motion.div>
                    <motion.div
                        className='form-section'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        <input
                            type='email' id='user_email' name='user_email' placeholder='Email'
                            value={email} onChange={(e) => setEmail(e.target.value)} required
                        />
                    </motion.div>
                    <motion.div
                        className='form-section'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 }}
                    >
                        <textarea
                            id='message' name='message' placeholder='Your message...'
                            value={message} onChange={(e) => setMessage(e.target.value)} required
                        />
                    </motion.div>
                    <motion.div
                        className='form-section'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5 }}
                    >
                        <button className='submit-btn' type='submit'>Submit</button>
                    </motion.div>
                </div>
            </motion.form>
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