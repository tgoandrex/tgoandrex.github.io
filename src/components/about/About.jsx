import { motion } from 'framer-motion';

import './about.css';

function About() {
    return (
        <section id='about'>
            <h3 className='about-header'>About Me</h3>
            <motion.div
                className='about-summary'
                initial={{ height: 0 }}
                animate={{ height: 350 }}
                transition={{ delay: 2 }}
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    When I graduated college I didn't know what to do with my new Bachelor's in History. I realized 
                    the only answers were: Either teach high school as a history teacher or go for a Master's for more 
                    potential opportunities. I decided to learn how to code instead.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                >
                    I first tried coding by taking a Python course at Codecademy, but did not fully appreciate 
                    the potential and enjoyment of coding until I took the Full Stack Javascript path on The 
                    Odin Project. Since then, I've enjoyed creating and being challenged by many projects 
                    that I created myself.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5 }}
                >
                    Besides coding I also like to play video games and board games, watch movies &#40;historical and 
                    fiction&#41;, and take hour hikes at my city park.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.5 }}
                >
                    The tools I often use are JavaScript, React, Node, PostgreSQL or MongoDB, and Express.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default About;