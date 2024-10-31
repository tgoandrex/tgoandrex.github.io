import { useState } from 'react';

import Accordion from './Accordion';

import './projects.css';

import waldo from '../../images/wheres-waldo.PNG';
import spacebook from '../../images/spacebook.PNG';
import memory from '../../images/memory-game.PNG';
import messageBoard from '../../images/mini-message-board.PNG';
import clown from '../../images/clown-landing.PNG';

function Projects() {
    const [activeImage, setActiveImage] = useState(null);

    const projects = [
        {title: 'Spacebook', description: `A social media application with a sitewide light and dark (space) theme. 
            Create a post, upload a photo, or comment on other users' posts or photos.`,
        link: 'https://spacebook-rho.vercel.app/', src: spacebook},
        {title: 'Clown Store',
        description: `A landing page for an imaginary clown store. A colorful and fun Tailwind showcase.`,
        link: 'https://extraordinary-faloodeh-2aa491.netlify.app/', src: clown},
        {title: `Where's Waldo App`,
        description: `Find Waldo in the picture and get the high score. The less time you took to find Waldo the 
        higher your score will be.`,
        link: 'https://wheres-waldo-mxpj.onrender.com/', src: waldo},
        {title: 'Memory Game',
        description: `Choose and remember which Pokemon you chose to get the high score. A maximum of nine Pokemon by 
        level 3.`,
        link: 'https://idyllic-cranachan-473ef6.netlify.app/', src: memory},
        {title: 'Nodejs Mini Message Board',
        description: `Add a message to the message board for others to read. You have the ability to edit and delete 
        your own messages too. Features user authentication in order to post messages.`,
        link: 'https://nodejs-mini-message-board.onrender.com/', src: messageBoard}
    ]

    const handleAccordionClick = (index) => {
        setActiveImage(projects[index].src);
    };

    return (
        <section id='projects'>
            <div className='projects-container'>
                <h3 className='projects-header'>Projects</h3>
                <div className='projects-subcontainer'>
                    <div className='accordion'>
                        <Accordion projects={projects} onAccordionClick={handleAccordionClick} />
                    </div>
                    <div className='projects-image-container'>
                        {activeImage && <img src={activeImage} alt="Project" />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;