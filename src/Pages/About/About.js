import './About.scss';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-page'>
            <h1>About Page</h1>
            
            <ul className='about-links'>
                <li className='about-link'>
                    <Link to='secret'>Secret</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default About;

//notes: nested component(secret about information) goes into about folder