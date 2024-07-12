function About() {
    return (
        <section id='about'>
            <div className='flex'>
                <div id='cube-container'>
                    <div className="cube">
                        <div className="side front"></div>
                        <div className="side back"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                    </div>
                </div>
                <div className='about-summary'>
                    <p>
                        Hello! My name is Andrew. I'm a self taught web developer with a particular interest in MERN stack 
                        development, but I've dabbled in other technologies. I like figuring out things myself, and feel a 
                        great sense of accomplishment when what I worked on finally works as I wanted it to. I've learned a lot, 
                        bit there is still much more to learn.
                    </p>
                    <p>
                        Besides web development, I have also completed a bachelor's in history, did various theater plays in 
                        high school, and enjoys taking hikes and playing video games. I also like listening to rock and its 
                        many genres, notably music from 80s and 90s, but not limited to that.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;