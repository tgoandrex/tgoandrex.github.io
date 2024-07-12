import { useState } from 'react';

import AccordionItem from './AccordionItem';

const Accordion = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        projects.map((project, index) => (
            <AccordionItem 
                key={index} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
                src={project.src} 
                isOpen={activeIndex === index} 
                onClick={() => handleClick(index)} 
            />
        ))
    );
};

export default Accordion;