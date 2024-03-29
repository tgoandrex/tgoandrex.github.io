import Accordion from './Accordian';

import waldo from '../../images/wheres-waldo.PNG';
import weather from '../../images/weather-app.PNG';
import memory from '../../images/memory-game.PNG';
import messageBoard from '../../images/mini-message-board.PNG';
import clock from '../../images/clock.PNG';
import clown from '../../images/clown-landing.PNG';

function Projects() {
    const projects = [
        {title: 'Weather App', description: 'Search any city in the world for its current weather as well as its weather forecast for the next three days! Gets temperature, wind, cloud percent, and displays weather as an icon!',
        link: 'https://storied-brioche-cd73f2.netlify.app/', src: weather},
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
        link: 'https://nodejs-mini-message-board.onrender.com/', src: messageBoard},
        {title: 'JavaScript Clock',
        description: `An analog and digital clock with settable alarm! Analog clock can display in either 24 or 12 hour modes. Alarm plays a set of beeps when the set time is hit.`,
        link: 'https://lively-kangaroo-2a5b95.netlify.app/', src: clock}
    ]

    return (
        <section id='projects'>
            <div className="accordian">
                {projects.map(({ title, description, link, src }) => (
                <Accordion title={title} description={description} link={link} src={src} />
                ))}
            </div>
        </section>
    )
}

export default Projects;