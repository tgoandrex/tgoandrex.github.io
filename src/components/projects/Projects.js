import waldo from '../../images/wheres-waldo.PNG'
import weather from '../../images/weather-app.PNG'
import memory from '../../images/memory-game.PNG'
import messageBoard from '../../images/mini-message-board.PNG'

function Projects() {
    const projects = [
        {title: `Where's Waldo App`,
        description: `Find Waldo in the picture and get the high score! The less time you took to find Waldo the higher your score will be! (I claim no legal ownership to 'Where's Waldo?'. This application was strictly made for educational purposes only.)`,
        link: 'https://wheres-waldo-mxpj.onrender.com/', src: waldo},
        {title: 'Weather App', description: 'Search any city in the world for its current weather as well as its weather forecast for the next three days! Gets temperature, wind, cloud percent, and displays weather as an icon!',
        link: 'https://storied-brioche-cd73f2.netlify.app/', src: weather},
        {title: 'Memory Game',
        description: `Choose and remember which Pokemon you chose to get the high score! Three levels of difficulty for a maximum of nine Pokemon! (I claim no legal ownership to 'Pokemon'. This application was strictly made for educational purposes only.)`,
        link: 'https://idyllic-cranachan-473ef6.netlify.app/', src: memory},
        {title: 'Nodejs Mini Message Board',
        description: `Add a message to the message board for others to read! You have the ability to edit and delete your own messages too! Features user authentication in order to post messages!`,
        link: 'https://nodejs-mini-message-board.onrender.com/', src: messageBoard},
    ]

    const listItems = projects.map((project) =>
        <li className='project-card' key={project.title}>
            <div className='project-image-container'>
                <img className='project-image' alt='project screenshot' src={project.src} />
            </div>
            <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <p className='project-link'><a href={project.link}>{project.link}</a></p>
            </div>
        </li>
    );

    return (
        <section id='projects'>
            <ul className='flex'>
                {listItems}
            </ul>
        </section>
    )
}

export default Projects;