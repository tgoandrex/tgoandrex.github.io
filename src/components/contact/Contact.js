import { useState } from 'react';

function Contact() {
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleClick = () => {
        setShowContactForm(!showContactForm);
    }

    return (
        <section id='contact'>
            <button className='contact-btn' onClick={()=> {toggleClick()}}>Let's Get in Touch</button>
            {showContactForm &&
                <form className='contact-form'>
                    <p>* Required Field</p>
                    <div className='form-section flex'>
                        <label htmlFor='form-name'>Name or Business *</label>
                        <input type='text' id='form-name' required />
                    </div>
                    <div className='form-section flex'>
                        <label htmlFor='form-email'>Email</label>
                        <input type='email' id='form-email'/>
                    </div>
                    <div className='form-section flex'>
                        <label htmlFor='form-message'>Message *</label>
                        <textarea id='form-message' required />
                    </div>
                    <div className='form-section'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            }
        </section>
    )
}

export default Contact;