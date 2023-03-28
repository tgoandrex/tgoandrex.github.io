function Projects() {
    const projects = [
        {title: 'Project1', description: 'Description1', link: 'Link1', src: 'Src1'},
        {title: 'Project2', description: 'Description2', link: 'Link2', src: 'Src2'},
        {title: 'Project3', description: 'Description3', link: 'Link3', src: 'Src3'},
        {title: 'Project4', description: 'Description4', link: 'Link4', src: 'Src4'}
    ]

    const listItems = projects.map((project) =>
        <li className='project-card' key={project.title}>
            <img className='project-image' alt='project screenshot' src={project.src} />
            <div className='project-content'>
                <span className='project-title'>{project.title}</span>
                <span className='project-description'>{project.description}</span>
                <span className='project-link'>{project.link}</span>
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