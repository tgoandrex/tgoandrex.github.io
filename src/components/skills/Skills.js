import { useState } from 'react';

import javascript from '../../images/javascript.png';
import nodejs from '../../images/nodejs.png';
import react from '../../images/react.png';
import mongodb from '../../images/mongodb.png';
import express from '../../images/express.png';
import npm from '../../images/npm.png';
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';

function Skills() {
    const [showIconText, setShowIconText] = useState([]);

    const toggleHover = (src) => {
        if(!showIconText.includes(src)) {
            setShowIconText(current => [...current, src]);
        } else {
            setShowIconText([]);
        }
    }

    const skills = [
        {name: 'Javascript', src: javascript},
        {name: 'NodeJS', src: nodejs},
        {name: 'React', src: react},
        {name: 'MongoDB', src: mongodb},
        {name: 'ExpressJS', src: express},
        {name: 'NPM', src: npm},
        {name: 'HTML5', src: html5},
        {name: 'CSS3', src: css3}
    ]

    const listItems = skills.map((skill) =>
        <li className='skill-card'>
            <img className='skill-icon' alt='skill card' src={skill.src}
                onMouseEnter={()=> {toggleHover(skill.src)}} onMouseLeave={()=> {toggleHover(skill.src)}}
                />
            <span className={showIconText.includes(skill.src) ? '' : 'hide'}>{skill.name}</span>
        </li>
    );

    return (
        <section id='skills'>
            <ul className='flex'>
                {listItems}
            </ul>
        </section>
    )
}

export default Skills;