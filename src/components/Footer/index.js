import { faLinkedin } from '@fontawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import './index.scss'

const Footer = () => (
    <ul>
        <li>
            <a 
                target="_blank"
                rel="noreferrer"
                href="linkedin.com/in/joshua-dominguez-0b7419196"
                >
                <FontAwesomeIcon icon={faLinkedin} color="#FFFF" />
            </a>
        </li>
    </ul>
)

export default Footer