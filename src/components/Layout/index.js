import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom'
import './index.scss';

const Layout = () => {
    return ( 
    <div className="App">
        <div>
            <Navbar />
        </div>
        <div className="webpage">
            <Outlet />
        </div>
    </div>
    )
}

export default Layout