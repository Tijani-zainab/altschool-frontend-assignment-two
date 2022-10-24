import './Layout.scss';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {

    let navLinks = [
        { to: '/', label: 'Home' }, 
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' }
    ];

    return (
        <div className='layout'>

            <header className='header'>
                <h1>Jani.Co</h1>
            </header>

            <nav className='nav'>
                <ul className='nav-links'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='nav-link'>
                            <NavLink exact to={link.to} activeClassName='active'>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default Layout;