function Projects() {
    const projects = [
        {title: 'Project1', description: 'Test', link: 'Test', src: 'Test'},
        {title: 'Project2', description: 'Test', link: 'Test', src: 'Test'},
        {title: 'Project3', description: 'Test', link: 'Test', src: 'Test'},
        {title: 'Project4', description: 'Test', link: 'Test', src: 'Test'}
    ]

    const listItems = projects.map((project) =>
        <li className='project-card'>
            <img className='project-image' alt='project screenshot' src={project.src} />
            <span className='project-title'>{project.title}</span>
            <span className='project-description'>{project.description}</span>
            <span className='project-link'>{project.link}</span>
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