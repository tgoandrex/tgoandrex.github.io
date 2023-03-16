function Skills() {
    const skills = ['skill1', 'skill2', 'skill3', 'skill4'];
    const listItems = skills.map((skill) => <li key={skill.toString()}>{skill}</li>);
    return (
        <section id='skills'>
            <ul className='flex'>
                {listItems}
            </ul>
        </section>
    )
}

export default Skills;