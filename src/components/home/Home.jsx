import { motion } from 'framer-motion';

import './home.css';

const Home = () => {
  return (
    <section id='home'>
      <h3 className='home-header'>Welcome!</h3>
      <motion.div
        className='home-summary'
        initial={{ height: 0 }}
        animate={{ height: 220 }}
        transition={{ delay: 2 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          I'm Andrew.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          I'm a full stack web developer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          I like to work with JavaScript, React, Node, PostgreSQL or MongoDB, and Express
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Home;