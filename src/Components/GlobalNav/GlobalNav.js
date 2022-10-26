import './GlobalNav.scss';
import { HashLink } from 'react-router-hash-link';

const Layout = ({ children }) => {

    let hashLinks = [
        { to: '/#home', label: 'Home' }, 
        { to: '/#about', label: 'About' },
        { to: '/#contact', label: 'Contact' }
    ];

    return (
        <div className='layout'>

            <header className='header'>
                <h1>Jani.Co</h1>
            </header>

            <nav className='nav'>
                <ul className='nav-links'>
                    {hashLinks.map((link, index) => (
                        <li key={index} className='nav-link'>
                            <HashLink className='hashlink-link' to={link.to} activeClassName='active' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>{link.label}</HashLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default Layout;