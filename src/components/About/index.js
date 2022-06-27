import './index.scss'

const About = () => {
    return (
    <section class="home" id="home">
        <div class="widthmax">
           <div class="home-content">
                <div>
                    <img id="headshot" src="../About/assets/Headshot-1.jpg" alt="Josh-Headshot"></img>
                </div>
            <br></br>
                <div>
                    <text>Joshua Dominguez</text>
                </div>
            </div>
        </div>
    
        <div class="about-content">
            <h1 class="title">About Me</h1>
            <div>
            <h3 class="text">
            I am a 22 year old student from El Paso, TX. Currently I am studying to learn full stack web development through UTA Coding Bootcamp. My educational pursuits are in both finance and aerospace engineering. During my spare time, I enjoy going outdoors, playing my synthesizers, travelling or learning new things. My goal is to grow and expand upon my skills so that I may have the means to create positive and meaningful change.
            </h3>
            <br></br>
             </div>
        </div>
        <div class="skills-content">
            <h1 class="title">Skills</h1>
            <div class="skills-list">
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>ReactJS</li>
            </ul>
            <br></br>
             </div>
        </div>
    </section>
    )
}

export default About
