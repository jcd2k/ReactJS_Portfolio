import './index.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav class="navbar"> 
        <div class="widthmax">
          <div class="symbol"><a href="#">Portfo<span>lio</span></a></div>
            <ul class="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Skills-Projects">Skills/Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
             </ul>
        </div>
    </nav>
)

export default Navbar