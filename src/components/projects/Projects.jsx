import Accordion from './Accordion';

import waldo from '../../images/wheres-waldo.PNG';
import spacebook from '../../images/spacebook.PNG';
import memory from '../../images/memory-game.PNG';
import messageBoard from '../../images/mini-message-board.PNG';
import clown from '../../images/clown-landing.PNG';

function Projects() {
    const projects = [
        {title: 'Spacebook', description: 'A social media application with a sitewide light and dark (space) theme! Create a post, upload a photo, or comment on other users\' posts or photos!',
        link: 'https://spacebook-rho.vercel.app/', src: spacebook},
        {title: 'Clown Store',
        description: `A landing page for a clown store! A colorful and fun Tailwind showcase!`,
        link: 'https://extraordinary-faloodeh-2aa491.netlify.app/', src: clown},
        {title: `Where's Waldo App`,
        description: `Find Waldo in the picture and get the high score! The less time you took to find Waldo the higher your score will be! (I claim no legal ownership to 'Where's Waldo?'. This application was strictly made for educational purposes only.) (Please allow a moment for the scoreboards to display, as the project's backend is deployed under render.com's 'free' plan)`,
        link: 'https://wheres-waldo-mxpj.onrender.com/', src: waldo},
        {title: 'Memory Game',
        description: `Choose and remember which Pokemon you chose to get the high score! A maximum of nine Pokemon by level 3! (I claim no legal ownership to 'Pokemon'. This application was strictly made for educational purposes only.)`,
        link: 'https://idyllic-cranachan-473ef6.netlify.app/', src: memory},
        {title: 'Nodejs Mini Message Board',
        description: `Add a message to the message board for others to read! You have the ability to edit and delete your own messages too! Features user authentication in order to post messages! (Please allow a moment for the app to display, as the project's backend is deployed under render.com's 'free' plan)`,
        link: 'https://nodejs-mini-message-board.onrender.com/', src: messageBoard}
    ]

    return (
        <section id='projects'>
            <div className="accordion">
                <Accordion projects={projects} />
            </div>
        </section>
    )
}

export default Projects;