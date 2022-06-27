import './index.scss'

const Projects = () => {
    return (
        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <ul>
                    <li>
                    <a href="https://github.com/jcd2k/Project-1" onclick="myJsFunc();">Green Planet Landscaping</a>
                    <h3>First project, built using simple html and js, with basic API functionality.</h3>
                    </li>
                    <li>
                    <a href="https://github.com/Tim-Zebra/Clinical-Platform-Streamlined" onclick="myJsFunc();">Psych Clinic Mockup</a>
                    <h3>Psych Clinic website for doctors and patients, using handlebars and SQL database.</h3>
                    </li>
                    <li>
                    <a href="https://github.com/HunterMcGrew/EXPRSSN" onclick="myJsFunc();">EXPRESSN</a>
                    <h3>Web application for artists to showcase their work, constructed with ReactJS and MongoDB.</h3>
                    </li>
                    <li>
                    <a href="https://github.com/jcd2k/Text_Editor" onclick="myJsFunc();">Text Editor</a>
                    <h3>Single-page text editing application.</h3>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects