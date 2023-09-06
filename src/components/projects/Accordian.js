import { useState } from 'react';

const Accordion = ({ title, description, link, src }) => {
    const [accordianActive, setAccordianActive] = useState(false);

    return (
        <div className="accordian-item">
            <div className="accordian-title" onClick={() => setAccordianActive(!accordianActive)}>
                <div>{title}</div>
                <div>{accordianActive ? '-' : '+'}</div>
            </div>
            {accordianActive &&
                <div className="accordian-content">
                    <div className='accordian-image-container'>
                        <img className='accordian-image' alt='project screenshot' src={src} />
                    </div>
                    {description}
                    <br />
                    <a href={link}>Live Demo</a>
                </div>
            }
        </div>
    );
};

export default Accordion;