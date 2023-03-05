function About() {
    return (
        <section id='about'>
            <div className='flex'>
                <div id='cube-container'>
                    <div class="cube">
                        <div class="side front"></div>
                        <div class="side back"></div>
                        <div class="side left"></div>
                        <div class="side right"></div>
                        <div class="side top"></div>
                        <div class="side bottom"></div>
                    </div>
                </div>
                <div id='about-summary'>
                    Summary
                </div>
            </div>
        </section>
    )
}

export default About;