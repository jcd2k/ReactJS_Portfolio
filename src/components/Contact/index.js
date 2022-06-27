import './index.scss'

const Contact = () => {
    return (
        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Social and Work Profile Links</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <ul>
                    <li>
                    <a href="linkedin.com/in/joshua-dominguez-0b7419196/" onclick="myJsFunc();">linkedin.com/in/joshua-dominguez-0b7419196/</a>
                    <h3>LinkedIn</h3>
                    </li>
                    <li>
                    <a href="http://github.com/jcd2k" onclick="myJsFunc();">http://github.com/jcd2k</a>
                    <h3>GitHub</h3>
                    </li>
                    <li>
                    <a href="http://instagram.com/joshuacdominguez" onclick="myJsFunc();">http://instagram.com/joshuacdominguez</a>
                    <h3>Instagram</h3>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact